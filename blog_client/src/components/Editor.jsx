import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <h2>Blog Content Editor</h2>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          // You can also console.log(data) to see the html content
          // console.log({ event, editor, data });
        }}
      />
      <h3>Preview:</h3>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Editor;
