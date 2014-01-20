(function($) {

  module('jQuery.flipbooker', {
    setup: function() {
      this.arr = [
        {href: "http://placehold.it/350x151", caption: 'test', pause: 500},
        {href: "http://placehold.it/350x152", caption: 'test'},
        {href: "http://placehold.it/350x153", pause: 500},
        {href: "http://placehold.it/350x154"}
      ];

      this.$container = $('#qunit-fixture');
    }
  });

  test('ovrrides the defaults with options', function() {
    expect(2);
    $.flipbooker(this.arr, {
      container: '#qunit-fixture'
    });

    ok(this.$container.children('img'), 'overriden container has an image element');
    ok(this.$container.children('div'), 'overriden container has a div element');
  });

  test('adds the correct styles to the container', function() {
    expect(4);
    $.flipbooker(this.arr, {
      container: '#qunit-fixture'
    });

    equal(this.$container.height(), 400, 'the container has the correct height');
    equal(this.$container.width(), 400, 'the container has the correct width');
    equal(this.$container.css('position'), 'relative', 'the container has relative position' );
    equal(this.$container.css('overflow'), 'hidden', 'the container has overflow hidden' );
  });

  asyncTest('it fires the callback', function() {
    expect(1);
    $.flipbooker(this.arr, {
      container: '#qunit-fixture',
      cb: function(){
        ok(true, 'callback fired');
        start();
      }
    });
  });
  // End jQuery.flipbooker

  module('events');

  test('it calls the flipbooker events', function() {
    expect(1);
    $(window).on('pause:flipbooker', function(){
      ok(true, 'event triggered');
    });
    $.flipbooker.pause();
  });
  // End events


}(jQuery));
