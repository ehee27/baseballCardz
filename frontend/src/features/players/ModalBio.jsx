import UpdateForm from '../../components/playerProfile/UpdateForm'

const ModalBio = ({ openBio, setOpenBio, onClose }) => {
  return (
    // surrounding div/button to trigger Modal
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ? ${
        openBio ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {/* ACTUAL MODAL CONTENT */}
      <div
        onClick={e => e.stopPropagation()}
        className={`bg-white/90 rounded-xl shadow p-6 w-2/3 transition-all ${
          openBio ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        {/* first content div */}
        <div className="border-2 text-center p-3">
          <p>
            Let's complete your profile setup. Please provide the following
            data.
          </p>
          {/* inner content div */}
          <div className="mx-auto my-4 w-80">
            <UpdateForm />
          </div>
          {/* footer content div */}
          <div className="flex justify-center gap-4"></div>
          FOOTER
        </div>
      </div>
    </div>
  )
}

export default ModalBio
