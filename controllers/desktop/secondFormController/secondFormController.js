define({ 

  onNavigate : function () {
    console.log("this is onNavigate on secondForm");
    this.setButtonOnclick(this.view.btnNavigation);
  },

  onPreShow : function () {
    console.log("this is onPreShow on secondForm");
    this.setButtonOnclick(this.view.btnNavigation);
  },

  setButtonOnclick : function (button) {
    if (button.onClick === undefined) {
      button.onClick = this.gotoStartForm;
    }
  },

  gotoStartForm : function () {
    var ntf = new kony.mvc.Navigation("startForm");
    ntf.navigate();   
  }  
   
 });