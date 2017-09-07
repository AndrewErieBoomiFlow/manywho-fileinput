(function (manywho) {


    var fileInputTest = React.createClass({

    componentDidMount: function () {
        console.log("Initialized File Input Comp");
    },
         
    handleChange: function (e) {
        console.log("Func : handleChange Called");

        manywho.state.setComponent(this.props.id, { contentValue: e.target.value }, this.props.flowKey, true);
        manywho.component.handleEvent(this, manywho.model.getComponent(this.props.id, this.props.flowKey), this.props.flowKey);
 
    },

    handleFileConvert: function (e) {

        console.log("Func : handleFileConvert Called");
 
        var files = e.target.files;
        var file = files[0];
        var outbox = document.getElementById("fileInputPass");
        var targ = this;

        if (files && file) {
            var reader = new FileReader();
            console.log("Start Load");
            reader.onload = function(readerEvt) {
                console.log("Completed binary file to string convertion");
                var binaryString = readerEvt.target.result;
                outbox.value = btoa(binaryString);
                manywho.state.setComponent(targ.props.id, { contentValue: outbox.value }, targ.props.flowKey, true);
            };
            reader.readAsBinaryString(file);
        }
    },
 
    render: function () {
 
        var model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        var state = manywho.state.getComponent(this.props.id, this.props.flowKey);
        
        return React.DOM.div(null, [
              React.DOM.div({ className: 'fileInputTestBox ' },
                  React.DOM.label(null, [
                      model.label,
                      React.DOM.input({ type: 'file', className: 'fileInputElement',  onChange: this.handleFileConvert}, null) ,
                      //React.DOM.input({ type: 'text', id:'fileInputPass', className: 'fileInputPass', value: state.contentValue, onChange: this.handleChange }, null) 
                      React.DOM.textarea({  id:'fileInputPass', className: 'fileInputPass', value: state.contentValue, onChange: this.handleChange }, null)                
                  ])
              ),
        ]); 
    }
});
 
manywho.component.register('fileInputComponent', fileInputTest, [ 'fileInputTestBox' ]);


}(manywho));