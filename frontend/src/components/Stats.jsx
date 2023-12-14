const Stats = () => {
  return (
    <div className="border-2">
      <p className="p-2">SEASON STATS</p>
      <div className="grid grid-cols-1 md:grid-cols-4 border-2 p-3 bg-black gap-2">
        <div className="flex flex-col justify-center items-center border-2 border-white bg-zinc-900 rounded-md p-3 text-white">
          <p className="text-3xl">AVG</p>
          <span className="text-5xl text-primary">307</span>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-white bg-zinc-900 rounded-md p-3 text-white">
          <p className="text-3xl">OBP</p>
          <span className="text-5xl text-primary">392</span>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-white bg-zinc-900 rounded-md p-3 text-white">
          <p className="text-3xl">SLG</p>
          <span className="text-5xl text-primary">546</span>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-white bg-zinc-900 rounded-md p-3 text-white">
          <p className="text-3xl">OPS</p>
          <span className="text-5xl text-primary">938</span>
        </div>
      </div>
    </div>
  )
}

export default Stats
