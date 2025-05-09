import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, isActive, clickImage} = props
  const {thumbnailUrl, thumbnailAltText} = thumbnailItem

  const clickImageIcon = () => {
    clickImage(thumbnailItem)
  }

  return (
    <li
      className={isActive ? 'thumbnailItem is-active-image' : 'thumbnailItem'}
    >
      <button onClick={clickImageIcon} className="button" type="button">
        <img alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default ThumbnailItem
