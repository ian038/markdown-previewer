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
    height: "50vh",
    marginTop: 20,
  }
})

const outputStyle = {
  width: "400px",
  height: "50vh",
  backgroundColor: "#DCDCDC",
  marginTop: 20,
}

const initialState = `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears
The rain---not the reign---in
Spain.`

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
