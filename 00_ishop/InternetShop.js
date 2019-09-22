var InternetShop = React.createClass({

  displayName: 'InternetShop',

  render: function() {

    let items = [];
    this.props.shopItems.forEach(item  => {
      const itemHash = 
        React.DOM.tr({ key: item.id, className: 'shop__item' },
          React.DOM.td({ className: 'shop__item-name' }, item.name),
          React.DOM.td({ className: 'shop__item-price' }, item.price),
          React.DOM.td({ className: 'shop__item-image' },
            React.DOM.img({ src: item.image })
          ),
          React.DOM.td({ className: 'shop__item-stock' }, item.stock),
      );

      items.push(itemHash);
    });

    let headers = [];
    this.props.shopItemsHeader.forEach((header, index) => {
      const headerHash = React.DOM.th({ key: index, className: 'shop__item-header' }, header);
      headers.push(headerHash);
    });

    return React.DOM.div({ className:'shop' }, 
      React.DOM.h1({ className: 'shop__name' }, this.props.shopName),
      React.DOM.table({ className: 'shop__table' },
        React.DOM.tbody({ className: 'shop__tbody' },
          React.DOM.tr({ className: 'shop__header' }, headers),
          items,
        )
      ),
    );
  },

});