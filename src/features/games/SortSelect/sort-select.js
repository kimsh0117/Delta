'use client'
import { useRecoilState } from 'recoil'
import Select from 'react-select'
import useClientSide from '@/hooks/useClientSide'
import { ordersState, selectedOrderState } from '../store'

const SortSelect = () => {
  const id = Date.now().toString()
  const isClientSide = useClientSide()
  const [options] = useRecoilState(ordersState)
  const [selected, setSelected] = useRecoilState(selectedOrderState)

  return isClientSide ? (
    <Select
      styles={{
        menu: base => ({
          ...base,
          zIndex: 3,
        }),
      }}
      id={id}
      defaultValue={selected}
      options={options}
      onChange={setSelected}
      placeholder='order'
      isMulti
    />
  ) : null
}

export default SortSelect
