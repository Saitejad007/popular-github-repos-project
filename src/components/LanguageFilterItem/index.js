// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filtersData, changeTabFilter, isActiveTab} = props
  const {language, id} = filtersData

  const onClickFilter = () => {
    changeTabFilter(id)
  }

  const buttonClassName = isActiveTab ? 'tab-btn active-tab' : 'tab-btn'

  return (
    <li className="filter">
      <button type="button" className={buttonClassName} onClick={onClickFilter}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
