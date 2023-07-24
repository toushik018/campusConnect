import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const AdmissionSubmit = () => {

    const { collegeName } = useParams();
    const {userData} = useContext(AuthContext);

    console.log(userData);


    const formattedCollegeName = collegeName.replaceAll('-', ' ');
    const collegeNameWithUppercase = formattedCollegeName.charAt(0).toUpperCase() + formattedCollegeName.slice(1);

    console.log(collegeNameWithUppercase);

    const imageHostingToken = import.meta.env.VITE_image_hosating;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
      
        try {
          const imageResponse = await fetch(img_hosting_url, {
            method: "POST",
            body: formData,
          });
      
          if (!imageResponse.ok) {
            throw new Error("Failed to upload image");
          }
      
          const imageResult = await imageResponse.json();
          if (imageResult.success) {
            const imgURL = imageResult.data.display_url;
            const candidateData = {
              candidateName: data.candidateName,
              subject: data.subject,
              candidateEmail: data.candidateEmail,
              candidatePhone: data.candidatePhone,
              address: data.address,
              dateOfBirth: data.dateOfBirth,
              image: imgURL, 
              collegeName: collegeNameWithUppercase,
            };
      
            fetch('https://campus-connect-server-toushik018.vercel.app/candidates', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(candidateData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
              
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your admission request was submitted successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  // You can add navigation logic here or redirect to a success page.
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            throw new Error("Failed to get image URL");
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
      

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Admission Form for <span className='text-3xl font-semibold text-blue-500'>{collegeNameWithUppercase}</span> </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="candidateName" className="block text-gray-700 font-bold mb-2">
                        Candidate Name
                    </label>
                    <input
                        type="text"
                        id="candidateName"
                        {...register('candidateName', { required: true })}
                        defaultValue={userData?.name}
                        className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {errors.candidateName && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        {...register('subject', { required: true })}
                        className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {errors.subject && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="candidateEmail" className="block text-gray-700 font-bold mb-2">
                        Candidate Email
                    </label>
                    <input
                        type="email"
                        id="candidateEmail"
                        {...register('candidateEmail', { required: true })}
                        defaultValue={userData?.email}
                        className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {errors.candidateEmail && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="candidatePhone" className="block text-gray-700 font-bold mb-2">
                        Candidate Phone
                    </label>
                    <input
                        type="tel"
                        id="candidatePhone"
                        {...register('candidatePhone', { required: true })}
                        className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {errors.candidatePhone && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        {...register('address', { required: true })}
                        defaultValue={userData?.address}
                        className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {errors.address && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        {...register('dateOfBirth', { required: true })}
                        className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {errors.dateOfBirth && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                        Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        {...register('image', { required: true })}
                        className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {errors.image && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionSubmit;
