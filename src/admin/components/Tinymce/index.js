import React from "react";
    import PropTypes from "prop-types";
    import { Editor } from "@tinymce/tinymce-react";
    const TinyEditor = ({ onChange, name, value }) => {
      return (
        <Editor
          apiKey="API KEY"
          value={value}
          tagName={name}
          onEditorChange={(editorContent) => {
            onChange({ target: { name, value: editorContent } });
          }}
          outputFormat='html'
          init={{
            selector: 'textarea',
            plugins: 'fullscreen insertdatetime .... MORE PLUGINS',
            toolbar: 'code numlist bullist .... MORE PLUGINS',
          }}
        />
      );
    };
    
    TinyEditor.propTypes = {
      onChange: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string,
    };
    export default TinyEditor;