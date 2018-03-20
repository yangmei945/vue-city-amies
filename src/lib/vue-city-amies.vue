<template>
  <div>
    <div v-if="show" class="amiesContainer">
      <div class="amiesMask"></div>
      <div class="amiesPlate">
        <div class="amiesBar">
          <span class="iconfont icon-ai207" @click="backamiesStep"></span>
          <span class="iconfont icon-guanbi" @click="close"></span>
        </div>
        <div class="amiesContent">
          <span v-if="amiesStep==0" class="item" v-for="(item, index) in cityList" @click="showCity(index)">{{item.provice}}</span>
          <span v-if="amiesStep==1" class="item" v-for="itm in cities" @click="confirmCity(itm)">{{itm}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-city-amies',
  props: {
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      "cityList":[
      {"provice": "北京市", "cities": ["北京市"]},
      {"provice": "天津市", "cities": ["天津市"]},
      {"provice": "河北省", "cities": ["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"]},
      {"provice": "山西省", "cities": ["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]},
      {"provice": "内蒙古", "cities": ["呼和浩特市","包头市","乌海市","赤峰市","通辽市","鄂尔多斯市","呼伦贝尔市","巴彦淖尔市","乌兰察布市","兴安盟","锡林郭勒盟","阿拉善盟"]},
      {"provice": "辽宁省", "cities": ["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"]},
      {"provice": "吉林省", "cities": ["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边"]},
      {"provice": "黑龙江省", "cities": ["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市","佳木斯市","七台河市","牡丹江市","黑河市","绥化市","大兴安岭"]},
      {"provice": "上海市", "cities": ["上海市"]},
      {"provice": "江苏省", "cities": ["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"]},
      {"provice": "浙江省", "cities": ["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"]},
      {"provice": "安徽省", "cities": ["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","合肥市","巢湖市","六安市","亳州市","池州市","宣城市"]},
      {"provice": "福建省", "cities": ["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"]},
      {"provice": "江西省", "cities": ["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"]},
      {"provice": "山东省", "cities": ["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","菏泽市"]},
      {"provice": "河南省", "cities": ["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市"]},
      {"provice": "湖北省", "cities": ["武汉市","黄石市","十堰市","宜昌市","襄樊市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施"]},
      {"provice": "湖南省", "cities": ["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西"]},
      {"provice": "广东省", "cities": ["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","潮州市","揭阳市","云浮市"]},
      {"provice": "广西", "cities": ["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"]},
      {"provice": "海南省", "cities": ["海口市"]},
      {"provice": "重庆市", "cities": ["重庆市"]},
      {"provice": "四川省", "cities": ["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝州","甘孜州","凉山"]},
      {"provice": "贵州省", "cities": ["贵阳市","六盘水市","遵义市","安顺市","铜仁","黔西南","毕节","黔东南","黔南布"]},
      {"provice": "云南省", "cities": ["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","楚雄","红河","文山","西双版纳","大理","德宏","怒江","迪庆"]},
      {"provice": "西藏", "cities": ["拉萨市","昌都","山南","日喀则","那曲","阿里","林芝"]},
      {"provice": "陕西省", "cities": ["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"]},
      {"provice": "甘肃省", "cities": ["兰州市","金昌市","白银市","天水市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏","甘南"]},
      {"provice": "青海省", "cities": ["西宁市","海东","海北","黄南","海南","果洛","玉树","海西"]},
      {"provice": "宁夏", "cities": ["银川市","石嘴山市","吴忠市","固原市","中卫市"]},
      {"provice": "新疆", "cities": ["乌鲁木齐市","克拉玛依市","吐鲁番","哈密","昌吉","博尔塔拉","巴音郭楞","阿克苏","克孜勒苏柯尔克孜","喀什","和田","伊犁哈萨克","塔城","阿勒泰"]},
      {"provice": "台湾省", "cities": ["台北市","高雄市","台南市","台中市","基隆市","新竹市","嘉义市"]},
      {"provice": "香港", "cities": ["香港岛","九龙","新界"]}
      ],
      cities: [],
      amiesStep: 0
    }
  },
  methods: {
    showCity(index){
      this.cities = this.cityList[index].cities;
      this.amiesStep = 1;
    },
    backamiesStep(){
      this.amiesStep = 0;
    },
    confirmCity(city){
      this.$emit("confirmCity", city);
      this.amiesStep = 0;
    },
    close(){
      this.$emit("close");
      this.amiesStep = 0;
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) 'iconfont.css';
*{
  margin: 0;
  padding: 0;
}
.amiesContainer{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
}
.amiesMask{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.amiesPlate{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background: #fff;
}
.amiesBar{
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.amiesBar .iconfont{
  display: inline-block;
  font-size: 0.46rem;
  color: #69c;
}
.amiesBar>span:first-child{
  float: left;
  font-size: 0.7rem;
}
.amiesBar>span:last-child{
  float: right;
}
.amiesContent{
  height: 9rem;
  background: #ddd;
}
.amiesContent .item{
  text-align: center;
  float: left;
  width: 2.25rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  margin: 0.1rem;
  font-size: 0.3rem;
}
</style>