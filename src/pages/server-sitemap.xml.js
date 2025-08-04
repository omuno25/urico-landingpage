// Tạo file này nếu bạn cần sitemap động
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  // Ví dụ: Lấy danh sách bài viết từ API hoặc database
  // const posts = await fetchPosts();

  // Giả sử bạn có danh sách bài viết
  const posts = [
    { id: '1', slug: 'bai-viet-1', updatedAt: new Date().toISOString() },
    { id: '39', slug: 'bai-viet-2', updatedAt: new Date().toISOString() },
    { id: '42', slug: 'bai-viet-2', updatedAt: new Date().toISOString() },
    // ...thêm bài viết khác
  ];

  const fields = posts.map((post) => ({
    loc: `http://blog.tramgiay.vn/?p=${post.id}`,
    lastmod: post.updatedAt,
    changefreq: 'weekly',
    priority: 0.7,
  }));

  return getServerSideSitemap(ctx, fields);
};

// Hàm mặc định (không sử dụng)
export default function Sitemap() {}
