var React = require('react');
// the JSX transform converts to React, so we need to add it back in
this['React'] = React;

function Button(props) {
  return <div {...props} />
}

Button.defaultProps = {
	id: "Dominic",
};

function App(props) {
  return <Button {...props} children="Hello world" />
}

App.getTrials = function(renderer, Root) {
  renderer.update(<Root className="div-thing" />);
  return [['simple render with jsx spread 3', renderer.toJSON()]];
};

if (this.__registerReactComponentRoot) {
  __registerReactComponentRoot(App);
}

module.exports = App;