// JSX
{
  render: function() {
    var = a;
    a = 1;
    console.log(a + 1);
    return <div>
      Hello World!
    </div>
  }
}

// Compile to JS
{
  render: function() {
    return React.createElement("div", null, "Hello World!");
  }
}
