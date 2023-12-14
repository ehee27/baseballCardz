// 1. create a button/div to trigger the setOpen
// 2. wrap with a general div (width, bg etc.)
// 3. Action icon at the top and body below.
// 4. actions or buttons in a footer

const Modal = ({ open, setOpen, onClose }) => {
  return (
    // surrounding div/button to trigger Modal
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ? ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {/* ACTUAL MODAL CONTENT */}
      {/* main background div */}
      <div
        onClick={e => e.stopPropagation()}
        className={`bg-white/90 rounded-xl shadow p-6 transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          Close
        </button>

        {/* first content div */}
        <div className="border-2 text-center w-100">
          <button>Example Icon</button>

          {/* inner content div */}
          <div className="border-2 mx-auto my-4 w-48">
            <h3 className="text-lg font-black">
              Are you sure you want to take this action?
            </h3>
          </div>

          {/* footer content div */}
          <div className="flex justify-center gap-4">
            <button className="transition ease-in-out delay-50 bg-red-600 w-[100px] h-[27px] hover:scale-105 text-xs text-white p-1 rounded hover:bg-red-300">
              Delete
            </button>
            <button
              onClick={onClose}
              className='className="transition ease-in-out delay-50 bg-green-600 w-[100px] h-[27px] hover:scale-105 text-xs text-white p-1 rounded hover:bg-green-500'
            >
              Cancel
            </button>
          </div>

          {/* end footer div */}
        </div>
      </div>
    </div>
  )
}

export default Modal
