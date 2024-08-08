import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWrappers } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/srcoll-view'


const SectionTabs = memo((props) => {
  console.log(props);
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }

  return (
    <TabWrappers>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div key={index} className={classNames("item", { active: index === currentIndex })} onClick={e => itemClickHandle(index, item)}>{item}</div>
            )
          })
        }
      </ScrollView>
    </TabWrappers>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs