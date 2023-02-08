import NextHeadSeo from 'next-head-seo';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

export type MyPageSeoProps = {
  path?: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
};

export const SiteHead: React.FC<MyPageSeoProps> = (props) => {
  const { publicRuntimeConfig } = getConfig();
  const router = useRouter();

  const APP_URL = publicRuntimeConfig.APP_URL;

  const {
    path = router.pathname,
    title = 'title',
    description = 'description',
    ogImagePath = '/default-og.png',
    noindex = false,
    noTitleTemplate = true,
  } = props;

  // Absolute page url
  const pageUrl = APP_URL + path;
  // Absolute og image url
  const ogImageUrl = APP_URL + ogImagePath;

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title}`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: 'siteName',
      }}
      twitter={{
        card: 'summary_large_image',
      }}
    />
  );
};