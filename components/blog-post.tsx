import Image from "next/image"

export default function BlogPost({
  title = "Taxing Laughter: The Joke Tax Chronicles",
  date = "August 24, 2023",
  teaser = "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
  imageUrl = "/placeholder.svg?height=340&width=1250",
  imageAlt = "Cover image",
  imageCaption = "Image caption goes here",
  content = (
    <>
      <p>
        Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under
        the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he couldn&apos;t seem
        to stop Jokester.
      </p>
      <p>
        And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they
        couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.
      </p>
      <figure>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={1250}
          height={340}
          className="aspect-video object-cover"
        />
        <figcaption>{imageCaption}</figcaption>
      </figure>
      <p>
        The king thought long and hard, and finally came up with <a href="#">a brilliant plan</a>: he would tax the
        jokes in the kingdom.
      </p>
      <blockquote>
        &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good joke, so it&apos;s only fair that they should
        pay for the privilege.&rdquo;
      </blockquote>
      <h3>The Joke Tax</h3>
      <p>The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:</p>
      <ul>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <p>
        As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
        refused to let the king&apos;s foolishness get him down: a court jester named Jokester.
      </p>
    </>
  ),
}) {
  return (
    <div className="bg-light-yellow">
      <div className="px-4 py-6 md:px-6 lg:py-16">
        <article className="prose prose-stone mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">{title}</h1>
            <p className="text-muted-foreground">Posted on {date}</p>
          </div>
          <p>{teaser}</p>
          <figure>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              width={1250}
              height={340}
              className="aspect-video object-cover"
            />
            <figcaption className="text-center">{imageCaption}</figcaption>
          </figure>
          {content}
        </article>
      </div>
    </div>
  )
}
