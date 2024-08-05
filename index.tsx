import { useState, useEffect } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';

const Home = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const [editingBanner, setEditingBanner] = useState<any | null>(null);

  useEffect(() => {
    fetch('/ads.json')
      .then(response => response.json())
      .then(data => setBanners(data));
  }, []);

  const handleEdit = (banner: any) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(banner => banner.id === updatedBanner.id ? updatedBanner : banner));
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div>
      {banners.map(banner => (
        <BannerImageComp
          key={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEdit(banner)}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;
