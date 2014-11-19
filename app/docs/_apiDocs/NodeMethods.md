

## Node Methods

When **node** data is added to Alchemy through GraphJSON from the data source, or through the API, Alchemy adds methods to the nodes that can be used universally.  These methods are then interpreted by the SVG and WebGL Renders to apply the commands appropriately.

##### node.getProperties
<!--  -->

`node.getProperties([property])`<br>
If no parameter is supplied, returns the properties of a node provided by the data source as well as any properties edited by the user.  Optionally, a string or array can be provided to return only specified properties. 

For example:

~~~ javascript
// Grab the node with id 1 
var node = alchemy.getNode(1);
// Return all properties
node.getProperties();
// Return only the value of property 'firstName'
node.getProperties('firstName');
// Return only the value of property 'firstName', 'lastName', and 'age'
node.getProperties(['firstName', 'lastName', 'age']);
~~~

##### node.setProperty
<!--  -->

`node.setProperty(['property', 'value']|[Object])`<br>
Set the property of a node with the supplied value, or set the value of multiple properties at once by providing an object.  

For example:

~~~ javascript
// Grab the node with id 1
var node = alchemy.getNode(1);
// Set property 'firstName' to 'Grace'
node.setProperty('firstName', 'Grace');
// Set multiple properties at once
node.setProperty({
    'firstName': 'Grace', 
    'lastName': 'Andrews', 
    'homeTown': 'Accra'
});
~~~

##### node.removeProperty
<!--  -->

`node.removeProperty('property'[,'more_properties'])`<br>
Remove one or more properties from a given node.  This method removes the entire property key value from the node.  Use the [node.setProperty](#nodesetproperty) method to change a property.

For Example:

~~~ javascript
// Grab the node with id 1
var node = alchemy.getNode(1);
// Remove 'firstName' property
node.removeProperty('firstName');
// Remove multiple properties
node.removeProperty(['firstName', 'age', 'homeTown']);

// Note:  To simply delete a property value, use the setProperty
// method, setting the value to `null` or an empty string.
node.setProperty('firstName', null);
node.setProperty('firstName', '');
~~~

##### node.setStyles
<!--  -->

`node.setStyle(['nodeStyleKey', 'nodeStyleValue'| Map of nodeStyles)`<br>
Alchemy abstracts the styles of the graph, making it easy to access them programatically.  A complete set of "nodeStyles" are referenced in the [GraphJSON](#GraphJSON) section.

~~~ javascript
// Get node
var some_node = alchemy.getNodes(1);
// Change the radius of the node to 30 pixels
some_node.setStyle('radius', 30);
// Change multiple "nodeStyle" attributes at once
var new_styles = {
    "radius": 40,
    "fill": "#1e75bb",
    "stroke-width": 4
};
some_node.setStyle(new_styles);
~~~

##### node.getStyles
<!--  -->

`node.getStyles(['property', 'properties...'])`<br>

To get the styles of a particular node, you can call the getStyles() method.  If `property` is blank, it will return an object consisting of all the current styles.  If arguments are passed to the function, an array will be returned that contains the current style setting of each property.

~~~ javascript
// Get node
var some_node = alchemy.getNodes(1);

// Check the node radius
some_node.getStyles('radius');

// Check the node radius as well as color
some_node.getStyles('radius', 'color');

// See all styles for some_node
some_node.getStyles();
~~~

##### node.toggleHidden
<!-- -->

`node.toggleHidden()`

Toggles the state of the node between `hidden` and `active`, and then renders the correct styles for that state.


##### node.outDegree
<!-- -->

`node.outDegree()`

Returns the number of edges connected to that node.

##### node.remove
<!-- -->

`node.remove()`

Deletes the node from Alchemy.  The node is removed from both the node data and the rendering and cannot be readded without reloading the data or creating it manually with alchemy.create.nodes() 

_______
