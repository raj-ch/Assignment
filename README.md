# Assignment
# Custom Popup
Assignment
1. Create a button.
2. On button click, display a Popup(modal box).
3. Popup should have:
  Header
  Tabs – Men, Women and Kids
  Sub header
  Accordion layout – contains sizes (selected and non-selected)
  Save & Continue button
  
4. On Save & Continue, need to make a json object (should contains subheaders and their sizes) in below format:
{
"payload": [{
Header
Tabs – Men, Women and Kids
Sub header
Accordion layout – contains sizes (selected and non-selected)
Save & Continue button
"headerName": "Big & Tall",
"sizes": [{
"value": "L, Tall",
"selected": true
}, {
"value": "XL, Big"
}, {
"value": "XL, Tall",
"selected": true
}, {
"value": "2XL, Big"
}]
}, {
"headerName": "Women's Regular",
"sizes": [{
"value": "1, S",
"selected": true
}, {
"value": "2, S",
"selected": true
}, {
"value": "3, S"
}, {
"value": "4, S"
}]
}, {
"headerName": "Kid's Regular",
"sizes": [{
"value": "S",
"selected": true
}, {
"value": "M",
"selected": true
}, {
"value": "XS"
}, {
"value": "XXS"
}]
}, {
"headerName": "Kid's Regular",
"sizes": [{
"value": "S",
"selected": true
}, {
"value": "M",
"selected": true
}, {
"value": "XS"
}, {
"value": "XXS"
}]
}]
}
5. Initially “Save & Continue” button will be disabled, enable it when user clicks
on any of the size.
