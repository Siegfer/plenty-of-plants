# plenty-of-plants

# step for PUT routes

- [ ] create the route for the `edit` page

`

```javascript
router.get('/edit/:idx', (req, res) => {
	let information = fs.readFileSync('./plant_info.json')
	let infoData = JSON.parse(information)
	res.render('plant_info/edit', {
		info: infoData[req.params.idx],
		infoId: req.params.idx
	})
})
```

- [] create a edit page: `edit.ejs

```html
<% let updateInfoAction ='/plant_info/<%=infoId%>/?_method=PUT'>
<form method="POST" action=" <% updateInfoAction ">
	<label>Name</label>
	<input type="text" name="name" value="<%= info.name %>" />
	<label>Common Name</label>
	<input type="text" name="common" value="<%= info.common %>" />
	<label>Light/Medium/Strong Light</label>
	<input type="text" name="light" value="<%= info.light %>" />
	<input type="submit" />
</form>
```
