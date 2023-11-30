import Select from 'react-select'
import usePlatforms from '@/features/platforms/usePlatforms'
import useClientSide from '@/hooks/useClientSide'

const PlatformSelect = () => {
  const id = Date.now().toString()
  const { options, selected, setSelected } = usePlatforms()
  const isClientSide = useClientSide()

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
      isMulti
      placeholder='platform'
    />
  ) : null
}

export default PlatformSelect
