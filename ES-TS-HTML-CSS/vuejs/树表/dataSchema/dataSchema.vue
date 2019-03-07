<template>
  <div style="height:100%">
    <Row :gutter="20" style="height:100%">
      <i-col span="24">
        <!-- <el-button type="primary" @click="insertFirstCategory">添加顶级目录</el-button> -->
      </i-col>
      <i-col span="24">
        <el-table :data="tableView" border height="calc(100vh - 170px)">
          <el-table-column fixed="left" label="数据key" >
            <template slot-scope="scope">
              <span v-for="space in scope.row.level" :key="space" class="ms-tree-space" />
              <i v-if="scope.row.hasOwnproperties" class="el-icon-caret-bottom"></i>
              <span v-else class="ms-tree-space" />
              {{scope.row.propertieName}}
            </template>
          </el-table-column>
          <el-table-column prop="propertieName" label="数据key">
          </el-table-column>
          <el-table-column prop="node.type" label="类型" >
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="210px" border>
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="insertFirstStep(scope.row)">添加</el-button>
              <el-button type="primary" size="mini" @click="editFirstStep(scope.row)">编辑</el-button>
              <el-button type="warning" size="mini" @click="deleteNode(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </i-col>
    </Row>
    <!-- 关联SKU的模态框 -->
    <el-dialog title="关联" :visible.sync="dialogVisible" width="50%" center>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input placeholder="请输入属性名称" v-model="dialogData.propName" @keyup.enter.native="insertCategory">
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input placeholder="请输入属性类型" v-model="dialogData.propType" @keyup.enter.native="insertCategory">
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input placeholder="备注" v-model="dialogData.required" @keyup.enter.native="insertCategory">
          </el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-show="operition=='edit'" type="primary" @click="editChildren">确定</el-button>
        <el-button v-show="operition=='insert'" type="primary" @click="insertToChildren">确定</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import showObjectTree from './customEval'
export default {
  name: 'mypage1',
  data () {
    return {
      dataSchema: {
        properties: {
          data: {
            type: 'object',
            required: ['code', 'status', 'message', 'data', 'token'],
            properties: {
              code: {
                type: 'number'
              },
              status: {
                type: 'number',
                enum: [0, 1]
              },
              message: {
                type: 'string'
              },
              data: {
                type: 'array'
              },
              token: {
                type: 'string'
              }
            }
          },
          data2: {
            type: 'object',
            required: ['code', 'status', 'message', 'data', 'token'],
            properties: {
              code: {
                type: 'number'
              },
              status: {
                type: 'number',
                enum: [0, 1]
              },
              message: {
                type: 'string'
              },
              data: {
                type: 'array'
              },
              token: {
                type: 'string'
              }
            }
          }
        }
      },

      currentRow: {},

      operition: '',
      dialogData: {
        propName: '',
        propType: '',
        required: ''
      },
      dialogVisible: false
    }
  },
  computed: {
    tableView () {
      let arry = []
      showObjectTree(this.dataSchema.properties, arry)
      return arry
    }
  },
  methods: {
    insertFirstStep (row) {
      this.dialogVisible = true
      this.currentRow = row
      this.operition = 'insert'
    },
    deleteNode (row) {
      // console.log(row);
      // 这个特殊的操作，是用来触发数据更新的，但是如果是实时更新自数据库的话，这个操作就不需要了
      let temp = this.dataSchema
      this.dataSchema = {}

      delete row.parentNode[row.propertieName]

      // 这个特殊的操作，是用来触发数据更新的，但是如果是实时更新自数据库的话，这个操作就不需要了
      this.dataSchema = temp
    },
    async editFirstStep (row) {
      this.dialogVisible = true
      this.currentRow = row

      this.dialogData.propName = row.propertieName
      this.dialogData.propType = row.node.type

      this.operition = 'edit'
    },
    async insertToChildren () {
      // 这个特殊的操作，是用来触发数据更新的，但是如果是实时更新自数据库的话，这个操作就不需要了
      let temp = this.dataSchema
      this.dataSchema = {}

      let data = this.dialogData

      if (!this.currentRow.node.properties) {
        this.currentRow.node.properties = {}
      }

      this.currentRow.node.properties[data.propName] = {
        type: data.type,
        required: data.required
      }

      this.dialogData = {}
      // 这个特殊的操作，是用来触发数据更新的，但是如果是实时更新自数据库的话，这个操作就不需要了
      this.dataSchema = temp
      this.dialogVisible = false
    },
    editChildren () {
      // 这个特殊的操作，是用来触发数据更新的，但是如果是实时更新自数据库的话，这个操作就不需要了
      let temp = this.dataSchema
      this.dataSchema = {}

      let data = this.dialogData

      this.currentRow.parentNode[data.propName] = {
        type: data.type,
        required: data.required
      }

      delete this.currentRow.parentNode[this.currentRow.propertieName]
      this.dialogData = {}
      // 这个特殊的操作，是用来触发数据更新的，但是如果是实时更新自数据库的话，这个操作就不需要了
      this.dataSchema = temp
      this.dialogVisible = false
    },
    async deleteFromChildren (row) {}
  },
  mounted () {}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 14px;
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: "";
  }
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
