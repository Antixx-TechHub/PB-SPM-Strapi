module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: 'spmglobaltech', 
        api_key: '477663449287523', 
        api_secret: 'jIuGudnBK-B1AXDF6EFap6PChrc' 
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
