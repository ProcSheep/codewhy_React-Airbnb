const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  mixin:{
    /* 阴影+动画过渡 */
    boxShadow: ` 
      transition: box-shadow 200ms ease;
      &:hover{
        box-shadow: 0 2px 4px rgba(0,0,0,.18); 
      }
    `
  }
}

export default theme