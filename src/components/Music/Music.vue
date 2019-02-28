<!-- prettier-ignore -->
<template>
  <div id="app">
    <div style="padding-top: 10px;"></div>
    <div class="mui-input-row" style="margin: 8px;">
          <input type="search" v-model="Search_content" class="mui-input-clear mui-input-clear" placeholder="搜索歌手或歌曲">
          <button type="button" class="btn" @click="search">确认搜索</button>
    </div>
    <div v-for="(music,index) in audio" :key="index">
      <aplayer :audio="music" :lrcType="1" ref="aplayer"/>
    </div>
  </div>
</template>
<script>
/*
{
        name: '东西（Cover：林俊呈）',
        artist: '纳豆',
        url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
      }
*/
export default {
  data() {
    return {
      obj: {},
      audio: [],
      result: [],
      Search_content: '',
      Hash: '',
      Album: '',
      music_img: '',
      music_url: ''
    };
  },
  created(){
        var link1='/GetMusicsURL';
        this.$axios.get(link1).then(res=>{

          //console.log(res);
          this.result=res.data.data;
          //console.log(this.result);
          this.result.forEach(r=>{
            this.Hash=r.hash;
            this.Album=r.album_id;

            this.obj.hash=this.Hash;
            this.obj.album_id=this.Album;
            //console.log(this.obj.hash+"/"+this.obj.album_id);
            var link2='/GetMusicsLink'+'hash='+this.obj.hash+'&album_id='+this.obj.album_id+'&_=1497972864535';
            this.$axios.get(link2).then(q=>{
              //console.log(q);
              this.obj.lrc='';
              this.music_url=q.data.data.play_url;
              this.music_img=q.data.data.img;
              this.obj.name=q.data.data.song_name
              this.obj.url=this.music_url;
              this.obj.cover=this.music_img;
              this.obj.artist=q.data.data.author_name;
              this.obj.lrc=q.data.data.lyrics;
              this.audio.push(this.obj);          
           })
          })
          
        })
  },
  methods:{
    test(){
      this.audio.push({
        name: '啵唧',
          artist: 'Hanser',
          url: 'https://cdn.moefe.org/music/mp3/kiss.mp3',
          cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/kiss.lrc',
      });
    },
    search(){
      this.audio=[];

       var link1='/GetMusicsHash/callback=jQuery19107655316341116605_1497970603262&keyword='+this.Search_content+'&page=1&pagesize=1&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0';
        this.$axios.get(link1).then(r=>{
          //console.log(r);
          this.Hash=r.data.data.lists[0].FileHash;
          this.Album=r.data.data.lists[0].AlbumID;

          this.obj.hash=this.Hash;
          this.obj.album_id=this.Album;
          
          var link2='/GetMusicsLink'+'hash='+this.obj.hash+'&album_id='+this.obj.album_id+'&_=1497972864535';
          this.$axios.get(link2).then(q=>{
            //console.log(q);
            this.obj.lrc='';
            this.music_url=q.data.data.play_url;
            this.music_img=q.data.data.img;
            this.obj.name=q.data.data.song_name
            this.obj.url=this.music_url;
            this.obj.cover=this.music_img;
            this.obj.artist=q.data.data.author_name;
            this.obj.lrc=q.data.data.lyrics;
            //console.log(this.obj.name+":"+this.music_url);
            this.audio.push(this.obj);
           })
        })

      //console.log(this.Search_content);
    }
  },
};
</script>
<style scoped>
  .btn{
    margin-left: 30px;
    line-height: 1.1;
      float: right;
      height: 70%;
      padding: 10px 15px;
      color: #fff;
      border: 1px solid #007aff;
      background-color: #007aff;
  }
  .mui-input-row{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  
</style>