__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),s=r(d[4]),u=r(d[5]),c=r(d[6]),h=c.Image,w=c.ListView,f=c.TouchableHighlight,p=c.StyleSheet,y=c.Text,S=c.View,_=(r(d[7]),[r(d[8]),r(d[9]),r(d[10]),r(d[11]),r(d[12]),r(d[13]),r(d[14]),r(d[15]),r(d[16]),r(d[17]),r(d[18]),r(d[19])]),C=(function(c){function p(){var n,s;t(this,p);for(var c=arguments.length,w=new Array(c),C=0;C<c;C++)w[C]=arguments[C];return(s=o(this,(n=l(p)).call.apply(n,[this].concat(w)))).state={dataSource:s.getInitialDataSource()},s._pressData={},s._renderRow=function(t,n,o){var l=Math.abs(v(t)),c=_[l%_.length];return u.createElement(f,{onPress:function(){return s._pressRow(o)},underlayColor:"transparent"},u.createElement(S,null,u.createElement(S,{style:R.row},u.createElement(h,{style:R.thumb,source:c}),u.createElement(y,{style:R.text},t))))},s._pressRow=function(t){s._pressData[t]=!s._pressData[t],s.setState({dataSource:s.state.dataSource.cloneWithRows(s._genRows(s._pressData))})},s}return s(p,c),n(p,[{key:"getInitialDataSource",value:function(){return new w.DataSource({rowHasChanged:function(t,n){return t!==n}}).cloneWithRows(this._genRows({}))}},{key:"UNSAFE_componentWillMount",value:function(){this._pressData={}}},{key:"render",value:function(){return u.createElement(w,{contentContainerStyle:R.list,dataSource:this.state.dataSource,initialListSize:21,pageSize:3,scrollRenderAheadDistance:500,renderRow:this._renderRow})}},{key:"_genRows",value:function(t){for(var n=[],o=0;o<100;o++){var l=t[o]?' (X)':'';n.push('Cell '+o+l)}return n}}]),p})(u.Component),v=function(t){for(var n=15,o=t.length-1;o>=0;o--)n=(n<<5)-n+t.charCodeAt(o);return n},R=p.create({list:{justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start'},row:{justifyContent:'center',padding:5,margin:3,width:100,height:100,backgroundColor:'#F6F6F6',alignItems:'center',borderWidth:1,borderRadius:5,borderColor:'#CCC'},thumb:{width:64,height:64},text:{flex:1,marginTop:5,fontWeight:'bold'}});e.title='<ListView> - Grid Layout',e.description='Flexbox grid layout.',e.examples=[{title:'Simple list view with grid layout',render:function(){return u.createElement(C,null)}}]},666715,[3,4,5,8,9,11,15,276,666691,666692,666693,666694,666695,666696,666697,666698,666699,666700,666701,666702]);