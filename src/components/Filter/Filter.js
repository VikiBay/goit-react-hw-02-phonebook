import {FilterLabel} from './Filter.styled'
export const Filter = ({value, onChange}) => (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );