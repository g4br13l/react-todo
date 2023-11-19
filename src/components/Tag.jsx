
export const Tag = ({tagName, selectTag, selected}) => {

  const tagStyle = {
    HTML: {backgroundColor: "#503307"},
    CSS: {backgroundColor: "#095651"},
    Javascript: {backgroundColor: "#4d3d05"},
    Typescript: {backgroundColor: "#094f5e"},
  }

  return (
    <button type="button"
            style={selected ? tagStyle[tagName] : null}
            onClick={() => selectTag(tagName)} >
      {tagName}
    </button>
  )

}