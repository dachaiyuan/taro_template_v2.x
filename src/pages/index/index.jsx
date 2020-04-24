import Taro, { useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import mapData from '~/utils/mapData'
import './index.less'


function Index({ dispatch }) {
  useEffect(() => {
    dispatch.test()
  }, [])
  return (
    <View className='index'>
      hello word
    </View>
  )
}


export default connect(...mapData(['global']))(Index);
