<template>
<div>
    <div class="title">{{name}}</div>
    <el-collapse v-for="(item, index) in items" :key="item.index" accordion>

        <el-collapse-item class="subTitle" :title=item.title>
            <div class="block" v-if="item.slider">
                <span class="demonstration">默认</span>
                <el-slider v-model=item.body.value :min=item.slider.min :max=item.slider.max :step=item.slider.step show-input=true></el-slider>
            </div>

            <el-button class="btn" type="success" size="medium" v-on:click="event(index)">点击运行</el-button>
            <div class="result-tips">返回示例:</div>
            <div class="result">{{item.result}}</div>
        </el-collapse-item>

    </el-collapse>
</div>
</template>

<script>
export default {
  name: "location",
  data() {
    return {
      name: "location",
      items: [
        {
          title: "location.fetch",
          type: "fetch",
          event: "sp://location/fetch",
          result: ""
        },
        {
          title: "location.startUpdates",
          type: "startUpdates",
          event: "sp://location/startUpdates",
          result: ""
        },
        {
          title: "location.stopUpdates",
          type: "stopUpdates",
          event: "sp://location/stopUpdates",
          result: ""
        },
        {
          title: "location.select",
          type: "select",
          event: "sp://location/select",
          result: ""
        }
      ]
    };
  },

  methods: {
    event: function(index) {
      let type = this.items[index].type;

      switch (type) {
        case "fetch":
          mt.location.fetch(res => {
            this.items[0].result = res;
          });
          return;

        case "startUpdates":
          mt.location.startUpdates(res => {
            this.items[1].result = res;
          });
          return;
        case "stopUpdates":
          mt.location.stopUpdates(res => {
            this.items[2].result = res;
          });
          return;

        case "select":
          mt.location.select(res => {
            this.items[3].result = res;
          });
          return;
        default:
          return;
      }
    }
  }
};
</script>
