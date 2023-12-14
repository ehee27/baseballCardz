// modal contains a form to upload image file
// 3 STEPS
// 1. formData uploaded via routes w multer - image uploaded to assets
// 2. updateProfile runs to update 'player.profilePic'
// 3. dispatch 'setCreds' to update auth/playerInfo with profilePic data

import { useState } from 'react'
import { useUpdateMutation, useUploadPicMutation } from './playersApiSlice'
import { setCredentials } from '../auth/authSlice'
import { useDispatch } from 'react-redux'
import Loading from '../../components/utils/Loading'
import { toast } from 'react-toastify'

const ModalProfPic = ({ openProfPic, onClose, playerInfo }) => {
  // initialize dispatch, destrucutre update actions, set file state
  const dispatch = useDispatch()
  const [updateProfile, { isLoading }] = useUpdateMutation()
  const [uploadPic] = useUploadPicMutation()
  const [file, setFile] = useState('')

  // handleUpload runs steps 1-3 mentioned above
  const handleUpload = async e => {
    e.preventDefault()
    try {
      // package the form data
      const formData = new FormData()
      formData.append('file', file)
      // upload said form data
      uploadPic(formData)
      // update profile and reset auth object with updated data
      const res = await updateProfile({
        _id: playerInfo._id,
        profilePic: file.name,
      }).unwrap()

      dispatch(setCredentials({ ...res, password: playerInfo.password }))
      window.location.reload()
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ? ${
        openProfPic ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {/* ACTUAL MODAL CONTENT ------------------------------------- */}
      {isLoading ? (
        <Loading />
      ) : (
        <div
          onClick={e => e.stopPropagation()}
          className={`bg-white/90 rounded-xl shadow p-6 w-2/3 transition-all ${
            openProfPic ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
          }`}
        >
          <button
            onClick={onClose}
            className="bg-green-300 absolute top-2 right-2 p-1 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-600"
          >
            Close
          </button>
          <input
            className="text-sm"
            type="file"
            accept="image/"
            onChange={e => setFile(e.target.files[0])}
          />
          <button
            className="transition ease-in-out delay-50 bg-green-600 w-[100px] h-[27px] hover:scale-105 text-xs text-white p-1 rounded hover:bg-green-500"
            onClick={handleUpload}
          >
            Upload Image
          </button>
        </div>
      )}
    </div>
  )
}

export default ModalProfPic
