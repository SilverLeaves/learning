/////////////////////////////////////////////////////////////////
// StateManager Extension
// By Philippe Leefsma, April 2016
/////////////////////////////////////////////////////////////////
import StateManagerPanel from './Viewing.Extension.StateManager.Panel'
import StatesAPI from './Viewing.Extension.StateManager.API'
import ExtensionBase from 'Viewer.ExtensionBase'
import ViewerToolkit from 'Viewer.Toolkit'

class StateManagerExtension extends ExtensionBase {

  /////////////////////////////////////////////////////////////////
  // Class constructor
  // 构造函数，参数为Viewer和options
  // **Autodesk.ADN.Viewing.Extension.StateManager**
  
  // Save and restore states of the viewer (position, markups, rotation, zoom, etc).
  // This extension requires a backend implementation to store the states. 
  // To load it on viewer, use the **loadExtension** method with the following parameters:
  // **apiUrl** that specifies the endpoints to call to save & restore states; 
  // and model._id that is passed to identify the model.
  
  // viewer.loadExtension('Viewing.Extension.StateManager', 
  // {
  //    apiUrl: 'http://localhost:3000/api/',
  //    model: {_id: 'YourModelUrn'}
  // }
  /////////////////////////////////////////////////////////////////
  constructor(viewer, options) {

    super(viewer, options);

    if(this._options.apiUrl) {

      this._api = new StatesAPI(
        options.apiUrl);
    }
  }

  /////////////////////////////////////////////////////////////////
  // Extension Id
  // 扩展的ID
  /////////////////////////////////////////////////////////////////
  static get ExtensionId() {

    return 'Viewing.Extension.StateManager';
  }

  /////////////////////////////////////////////////////////////////
  // Load callback
  // 回调函数
  /////////////////////////////////////////////////////////////////
  //记载时候的回调函数
  load() {

    this._control = ViewerToolkit.createButton(
      'state-manager-control',
      'glyphicon glyphicon-retweet',
      'Manage States', ()=>{

        this._panel.toggleVisibility();
      });

    this.onAddStateHandler =
      (e) => this.onAddState(e);

    this.onRestoreStateHandler =
      (e) => this.onRestoreState(e);

    this.onRemoveStateHandler =
      (e) => this.onRemoveState(e);

    this.onSaveSequenceHandler =
      (e) => this.onSaveSequence(e);

    this._panel = new StateManagerPanel(
      this._options.container || this._viewer.container,
      this._control.container);

    this._panel.on('open', () => {

      if(this._api) {

        this._api.getSequence(this._options.model._id).then(
          async(sequence) => {

          var states = await this._api.getStates(
            this._options.model._id);

          sequence.forEach((stateId) => {

            states.forEach((state) => {

              if(state.guid == this._options.stateId){

                this._viewer.restoreState(state, false);
              }

              if (state.guid == stateId) {

                this._panel.addItem(state);
              }
            })
          })
        })
      }
    })

    this._panel.on('close', (state) => {

      this._panel.clearItems()
    })

    this._panel.on('state.add', (state) => {

      return this.onAddStateHandler(state);
    })

    this._panel.on('state.restore', (state)=>{

      return this.onRestoreStateHandler(state);
    });

    this._panel.on('state.remove', (state)=>{

      return this.onRemoveStateHandler(state);
    });

    this._panel.on('sequence.update', (sequence)=>{

      return this.onSaveSequenceHandler(sequence);
    });

    this.parentControl = this._options.parentControl;

    if(!this.parentControl){

      var viewerToolbar = this._viewer.getToolbar(true);

      this.parentControl = new Autodesk.Viewing.UI.ControlGroup(
        'state-manager');

      viewerToolbar.addControl(this.parentControl);
    }

    this.parentControl.addControl(
      this._control);

    if(this._options.homeState) {

      var state = this._viewer.getState()

      state.name = "Home"
      state.readonly = true

      this._panel.addItem(state)
    }

    this._panel.setVisible(
      this._options.showPanel);

    console.log('Viewing.Extension.StateManager loaded');

    return true;
  }

  /////////////////////////////////////////////////////////////////
  // Unload callback
  // 卸载时候的回调函数
  /////////////////////////////////////////////////////////////////
  unload() {

    this.parentControl.removeControl(
      this._control);

    this._panel.setVisible(false);

    console.log('Viewing.Extension.StateManager unloaded');

    return true;
  }

  /////////////////////////////////////////////////////////////////
  //
  // 添加序列
  ////////////////////////////////////////////////////////////////
  onAddState (data) {

    var state = this._viewer.getState();

    state.guid = ExtensionBase.guid()

    state.name = (data.name.length ?
      data.name : new Date().toString('d/M/yyyy H:mm:ss'));

    if(this._api) {

      this._api.addState(
        this._options.model._id,
        state);
    }

    return state;
  }

  /////////////////////////////////////////////////////////////////
  //
  // 重置状态
  ////////////////////////////////////////////////////////////////
  onRestoreState (state) {

    this._viewer.restoreState(state, null, false);
  }

  /////////////////////////////////////////////////////////////////
  //
  // 移除状态
  ////////////////////////////////////////////////////////////////
  onRemoveState (state) {

    if(this._api) {

      this._api.removeState(
        this._options.model._id,
        state.guid);
    }
  }

  /////////////////////////////////////////////////////////////////
  //
  // 保存序列
  ////////////////////////////////////////////////////////////////
  onSaveSequence (sequence) {

    if(this._api) {

      this._api.saveSequence(
        this._options.model._id,
        sequence);
    }
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension(
  StateManagerExtension.ExtensionId,
  StateManagerExtension);
