

const RemainingTodos = ({count}) => {
    const suffix=count===1?'':'s'
  return (
    <div>
      <h5 className="font-semibold text-Dark_Blue text-2xl">Remaining Todos</h5>
      <strong>{count} </strong>item{suffix} left
    </div>
  )
}

export default RemainingTodos
