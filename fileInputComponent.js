(function (manywho) {

    function getStringAttribute(attributes, name) {

        if (attributes != null &&
            attributes[name] != null) {
            return attributes[name];
        }

        return null;

    }

    function getNumberAttribute(attributes, name) {

        if (getStringAttribute(attributes, name) != null) {

            return parseInt(getStringAttribute(attributes, name));

        }

        return 0;

    }

    var fileInputComponent = React.createClass({

        componentDidMount: function () {

            var id = this.props.id;
            var flowKey = this.props.flowKey;
            var componentFunction = this;

            var model = manywho.model.getComponent(this.props.id, this.props.flowKey);

            //var fileInputContainer = document.getElementById(id);

            //var html = "<input type='file' name='file-input-comp' >";

            //fileInputContainer.appendChild(html);
        },

        render: function () {

            manywho.log.info('Rendering File Input Comp : ' + this.props.id);

            var classes = manywho.styling.getClasses(this.props.parentId, this.props.id, "FileInputContainer", this.props.flowKey).join(' ');
            var model = manywho.model.getComponent(this.props.id, this.props.flowKey);

            if (model.isVisible == false) {
                classes += ' hidden';
            }

            return React.DOM.canvas({
                id: this.props.id
            });

        }
    });

    manywho.component.register('fileInputCont', fileInputComponent, ['FileInputContainer']);

}(manywho));