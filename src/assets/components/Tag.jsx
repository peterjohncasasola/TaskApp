
import './Tag.css'

const Tag = ({ tagName, selectTag, selected }) => {

    const tagSyle = {
        HTML: {backgroundColor: "#E34E25", color: "#fff"},
        CSS: {backgroundColor: "#214CE5", color: "#fff"},
        JavaScript: {backgroundColor: "#EACA31", color: "#fff"},
        React: {backgroundColor: "#087EA4", color: "#fff"},
        Vue: {backgroundColor: "#3FB984", color: "#fff"},
        Blazor: {backgroundColor: "#5C2D91", color: "#fff"},
        Default: {backgroundColor: "#f9f9f9"},
    }

    return (
        <button type="button" className="tag"
                style={selected ? tagSyle[tagName] : tagSyle["Default"]}
                onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    )
}

export default Tag;