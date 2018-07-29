////////////////////////////////////////////////////////////////
// StateManager API
//
/////////////////////////////////////////////////////////////////
import ClientAPI from 'ClientAPI'

export default class StatesAPI extends ClientAPI {

  ///////////////////////////////////////////////////////////////
  // Class constructor
  // 构造函数
  ///////////////////////////////////////////////////////////////
  constructor (apiUrl) {

    super(apiUrl)
  }

  ///////////////////////////////////////////////////////////////
  //
  // 获得序列
  ///////////////////////////////////////////////////////////////
  async getSequence(modelId) {

  var url = this.apiUrl + `/models/${modelId}/states/sequence`

  return this.ajax(url)
}

  ///////////////////////////////////////////////////////////////
  //
  // 获得状态
  ///////////////////////////////////////////////////////////////
  getStates(modelId) {

    var url = this.apiUrl + `/models/${modelId}/states`

    return this.ajax(url)
  }

  ///////////////////////////////////////////////////////////////
  //
  //保存序列
  ///////////////////////////////////////////////////////////////
  saveSequence(modelId, sequence) {

    var payload = {
      sequence: sequence
    }

    var url = this.apiUrl + `/models/${modelId}/states/sequence`

    return this.ajax({
      url: url,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(payload)
    })
  }

  ///////////////////////////////////////////////////////////////
  //
  //添加状态
  ///////////////////////////////////////////////////////////////
  addState(modelId, state) {

    var payload = {
      state: state
    }

    var url = this.apiUrl + `/models/${modelId}/states`

    return this.ajax({
      url: url,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(payload)
    })
  }

  ///////////////////////////////////////////////////////////////
  //
  //移除状态
  ///////////////////////////////////////////////////////////////
  removeState(modelId, stateId) {

    var url = this.apiUrl + `/models/${modelId}/states/${stateId}/remove`

    return this.ajax({
      url: url,
      method: 'POST'
    })
  }
}
