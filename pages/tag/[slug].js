import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import ItemPost from '../../components/ItemPost'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';

export default function tag({ posts }) {




  return (
    <>
   <NextSeo
     title= 'Access your tag realted articles'
     description= 'Access your tag realted articles'
        openGraph={{
          url: 'https://fang-zhang.github.io',
          title: 'Access your tag realted articles',
          description: 'Access your tag realted articles',

          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Fang Zhang',
        }}
      />

      <div className="container my-3">
        <div className="row">

          <div className="col-lg-10 post-date m-1 p-2m-auto">

            {
              posts.map((post, index) => {

                return <ItemPost key={index} post={post} />
              }
              )

            }


          </div>


        </div>
      </div>
    </>
  )





}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  let tempStorage = []

  const temppaths = files.map((filename) => {

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    if (frontmatter.draft === false) {
      frontmatter.tags.map(
        tag => {
          let slug = slugify(tag)
          tempStorage.push({ params: { slug } });

        }
      )
    } else {
      return null
    }


  })




  const paths = tempStorage.filter((item,
    index) => {
    return tempStorage.indexOf(item) === index
  })



  // const paths=["npm"]


  return {
    paths,
    fallback: false,
  }

}

export async function getStaticProps({ params: { slug } }) {

  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  let tempStorage = []



  // Get slug and frontmatter from posts

  const tempPosts = files.map((filename) => {

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)



    if (frontmatter.draft === false) {
      frontmatter.tags.map(
        tag => {
          let tagSlug = slugify(tag)
          if (slug === tagSlug) {
            tempStorage.push({ post: frontmatter })
          }
        }
      )
    } else {
      return null
    }
  })



  //  remove null in tempPosts 

  const posts = tempStorage.filter(
    post => {

      return post && post
    }
  )

  return {
    props: {
      posts
    },
  }


}