define({ 

  onNavigate : function () {
    console.log("this is onNavigate on startForm");
    this.setButtonOnclick(this.view.btnNavigation);
  },

  onPreShow : function () {
    console.log("this is onPreShow on startForm");
    this.setButtonOnclick(this.view.btnNavigation);
  }, 

  setButtonOnclick : function (button) {
    if (button.onClick === undefined) {
      button.onClick = this.gotoSecondForm;
    }
  },

  gotoSecondForm : function () {
    var ntf = new kony.mvc.Navigation("secondForm");
    ntf.navigate();   
  } 

 });