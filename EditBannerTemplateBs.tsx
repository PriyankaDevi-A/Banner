import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface EditBannerProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: banner
  });

  const onSubmit = (data: any) => {
    onSave(data);
  };

  return (
    <div className="bottom-sheet">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input type="text" {...register('title')} />
        </label>
        <label>
          Description:
          <input type="text" {...register('description')} />
        </label>
        <label>
          CTA:
          <input type="text" {...register('cta')} />
        </label>
        <label>
          Image URL:
          <input type="text" {...register('image')} />
        </label>
        <label>
          Background Color:
          <input type="text" {...register('background')} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditBannerTemplateBs;
