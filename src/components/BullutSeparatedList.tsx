
const BulletSeparatedList = ({list, className}: {list: any[], className?: string}) => {
  return list.map((el, ind) => (
    <span key={ind} className={className}>{el}{ind < list.length - 1 && <>&nbsp;•&nbsp;</>}</span>
  ))
}

export default BulletSeparatedList;