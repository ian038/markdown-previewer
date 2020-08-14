import React, { useState } from 'react';
import { makeStyles, Grid, Chip } from '@material-ui/core';
import marked from 'marked'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  },
  inputStyle: {
    width: "400px",
    height: "70vh",
    marginTop: 20,
  }
})

const outputStyle = {
  width: "400px",
  height: "70vh",
  backgroundColor: "#DCDCDC",
  marginTop: 20,
}

const initialState = `Welcome to my React Markdown Previewer!
============
This is a sub-heading...
-----------
### And here's some other cool stuff:
// this is a multi-line code:
\`\`\`
function addNumbers(a, b) {
  return a + b
}
\`\`\`
> A Block Quote!
### Text attributes 
*italic*
 **bold**,
\`monospace\`
~~strikethrough~~ 
-----------------
[FreeCodeCamp Link](https://www.freecodecamp.com)
================
Shopping list:
  * apples
  * oranges
  * pears

### And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)`

marked.setOptions({
  breaks: true
})

function App() {
  const [markdown, setMarkdown] = useState(initialState)
  const classes = useStyles()

  const updateMarkdown = markdown => {
    setMarkdown(markdown)
  }

  return (
    <div className="App">
      <Grid container className={classes.root}>
        <Chip label="Markdown Previewer" color="primary" />
      </Grid>
        <div style={{ display: 'flex', direction: 'row', marginTop: 40, justifyContent: 'center' }}>
          <Grid style={{ marginRight: '300px' }}>
            <Chip label="Markdown Input"/>
            <div className="input">
              <textarea 
              className={classes.inputStyle} 
              id="editor" 
              value={markdown} 
              onChange={e => {
                updateMarkdown(e.target.value)
              }}>
              </textarea>
            </div>
          </Grid>

          <Grid> 
            <Chip label="Preview" />
            <div style={outputStyle} 
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}>
            </div>
          </Grid>
        </div>
    </div>
  );
}

export default App;
