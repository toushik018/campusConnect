import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const { user, userData } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch(`https://campus-connect-server-toushik018.vercel.app/update-profile/${userData?._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Updated successful',
                showConfirmButton: false,
                timer: 1500
              })
          })
          .catch((error) => {
            console.error('Error updating profile:', error);
          });
      };
      

    return (
        <div className="container mx-auto py-8 h-screen">
            <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        id="name"
                        {...register('name', { required: true })}
                        type="text"
                        defaultValue={user?.displayName}
                        className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>



                <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                {...register('email', {
                  required: true, })}
                  defaultValue={userData?.email}
                type="email"
                autoComplete="email"
                required
                className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

                <div className="mb-4">
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                        University
                    </label>
                    <input
                        id="university"
                        {...register('university')}
                        type="text"
                        defaultValue={userData?.university}
                        className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        id="address"
                        {...register('address')}
                        type="text"
                        defaultValue={userData?.address}
                        className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
