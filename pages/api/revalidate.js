export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  
    try {
        
      await res.unstable_revalidate(`/post/${req.body.data.slug}`)
      if(req.body.data.beginner==true){res.unstable_revalidate('/')}
      const categories = req.body.data.categories;
      await categories.map((category)=>{
        if(category.id=="cl0v69lyp9mx00axor4ne8pd5"){res.unstable_revalidate(`/category/blockchain`)}
        if(category.id=="cl196jy95gmyp0ftjmms1dby1"){ res.unstable_revalidate(`/category/defi`)}
        if(category.id=="cl196kliihhk80auoti3ca5k0"){ res.unstable_revalidate(`/category/cefi`)}
        if(category.id=="cl196l0kuiemm0duocnodbw0b"){ res.unstable_revalidate(`/category/exchanges`)}
        if(category.id=="cl196lbukhhpn0auolkp9hjwx"){ res.unstable_revalidate(`/category/wallets`)}
        if(category.id=="cl196lnz9hhrl0auo32xlwm85"){ res.unstable_revalidate(`/category/nft`)}
        if(category.id=="cl196n7pbh32x0cuj79benzbe"){ res.unstable_revalidate(`/category/bitcoin`)}
        if(category.id=="cl196ntr3gnq30ftj3pw6c6p1"){ res.unstable_revalidate(`/category/altcoins`)}
        if(category.id=="cl196ohpdhif20auovsdu39wo"){ res.unstable_revalidate(`/category/metaverse`)}
        if(category.id=="cl196ubylh4be0cujxpb4hnbv"){ res.unstable_revalidate(`/category/guides`)}
        if(category.id=="cl196v0ophjew0auo7dd5ikqs"){ res.unstable_revalidate(`/category/crypto-basics`)}
        if(category.id=="cl196yn1kihrg0duoos1yfxjm"){ res.unstable_revalidate(`/category/technical-analysis`)}
        if(category.id=="cl1970nyohawl0bt3dl8u126w"){ res.unstable_revalidate(`/category/deep-dives`)}
        if(category.id=="cl24es0zr9rce0brx9l2uft7m"){ res.unstable_revalidate(`/category/tools`)}
      })
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }