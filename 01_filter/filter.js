var Filters = React.createClass({

  displayName: 'Filters',

  propTypes: {
    texts: React.PropTypes.arrayOf(
      React.PropTypes.string
    )
  },

  getInitialState: function () {
    return {
      textsDefault: this.props.texts,
      textsFiltered: this.props.texts,
      textsCode: this.getTextsCode(this.props.texts),
      filter: '',
      isSorted: false
    };
  },

  getTextsCode: function(array) {
    let result = [];
    array.forEach((element, index) => {
      const textCode = React.DOM.span({key:index}, element )
      result.push(textCode);
    });
    return result;
  },

  changeTextsSorted: function() {
    let result = this.state.textsFiltered.slice();
    if (this.state.isSorted) {
      this.setState( {textsCode: this.getTextsCode(result)} );
    } else {
      this.setState( {textsCode: this.getTextsCode(result.sort())} );
    }
    this.state.isSorted = !this.state.isSorted;
  },

  changeFilter: function(EO) { 
    let result = this.state.textsFiltered = [];
    this.state.textsDefault.forEach(text => {
      const bollean = text.includes(EO.target.value);
      if (bollean) {
        result.push(text)
      }
    });
    this.state.filter = EO.target.value;
    this.setState( {textsCode: this.getTextsCode(result)} );
  },

  cancel: function() {
    this.setState({
      textsCode: this.getTextsCode(this.state.textsDefault),
      isSorted: false,
      filter: ''
    });
  },

  render: function() {
    return React.DOM.div({ className:'filter' },
      React.DOM.div({ className:'filter__wrapper'},
        React.DOM.div({ className:'filter__inputs'},
          React.DOM.input({className:'filter__checkbox', type:'checkbox', checked: this.state.isSorted, onChange: this.changeTextsSorted }),
          React.DOM.input({className:'filter__input', type:'text', value: this.state.filter, onChange: this.changeFilter}),
          React.DOM.input({className:'filter__button', type:'button', value:'Сброс', onClick:this.cancel}),
        ),
        React.DOM.div({ className: 'filter__texts' }, this.state.textsCode)
      )
    );
  },

});