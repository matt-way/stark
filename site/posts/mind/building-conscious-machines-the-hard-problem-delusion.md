{{{
	"title" : "Building conscious machines - The Hard Problem Delusion",
	"date" : "2012-09-23",
    "author" : "<a href=\"http://twitter.com/_MattWay\" target=\"_blank\">Matt Way</a>",
    "header" : "https://s3.amazonaws.com/compressionaddict/mind_games.jpg",
    "headerNote" : "image by <a href=\"http://mariano-petitdemurat.deviantart.com/art/Mind-Games-312203702\" target=\"_blank\">Mariano Petit de Murat</a> & <a href=\"http://theflannelgraph.tumblr.com/\" target=\"_blank\">Maddie Chaffer</a>"
}}}

####Preface

To paraphrase Dennett, everybody believes they are an expert on consciousness and subjective experience. The problem with this mind set, is that every discussion is met with significant passion, but unfortunately little substance. I want to share some of the ideas and studies I have come across over my years of neuroscience, and computer science research, particularly to do two things. Firstly I want to add some more food for thought to the topic of qualia (or the hard problem). Secondly, using this information, I want to provide a mechanistic hypothesis of how you could potentially implement software that has subjective experience, in the same way humans do. Read the wikipedia links provided below if you need to get up to speed with the associated topics.

* [The Hard Problem of Consciousness](http://en.wikipedia.org/wiki/Hard_problem_of_consciousness)
* [Qualia](http://en.wikipedia.org/wiki/Qualia)
* [Consciousness](http://en.wikipedia.org/wiki/Consciousness)

<!-- preview -->

####Introduction

Lets start by imagining that you are a software engineer that has been commissioned to create some software. The specification has a seemingly simple requirement, “Write software that experiences.” Many would simply walk away touting impossibilities or a lack of theoretical ground work, but like a ballsy developer, you dive in and try to deconstruct and simplify the problem. What is experience? What does it mean to experience? Is experience something, and if so what is it made of? These are big questions that have plagued philosophers and scientists for quite some time, but luckily your problem has been already packaged into a nice simplification. All you have to do is create qualia.

> From wikipedia: “Qualia is a term used in philosophy to refer to individual instances of subjective, conscious experience.”

The keyword here is **instances**, meaning that your problem has now been simplified further. We now only need to construct a single instance of qualia in software to achieve our goal. So do we decide to try and implement a headache, happiness, redness? Before trying to formulate an answer I have put together four short sections below, outlining important issues and observations relating to qualia. I feel that they will have an effect on how we determine the next course of action.

####*Qualia Discussion*

####The Table of Experience

So far we are approaching the problem from the common vantage point, which tends towards asking questions like, “What are the properties of redness?” or “What is the difference between redness and blueness?”. These are the kinds of questions that show where the difficulty of the concept arises, so how about instead, we start by analysing what we do know about qualia, and move from there. It seems as though the only thing we can say is that each quale are different to one another, although that difference cannot be specified. This leaves us with an ever complicating problem. 

![conscious-antedation](https://s3.amazonaws.com/compressionaddict/sensory-apparatus.jpg)
<em><small>- various qualia related sensory modalities</small></em>

The image above shows some of the sensory apparatus that are associated with the vast sets of qualia that we can list. If we were to suppose that we could indeed describe redness in such a way that it satisfied a solution to the hard problem, we would still be left back at the drawing board, as we would then have to also describe the massively large set of other qualia. A coherent complete description of redness would tell us nothing about smell, let alone anything about unknown potential qualia. If qualia truly are axiomatic in nature, then this largely inelegant set begs the question, “If our perspective renders the set irreducible, could we be approaching this problem incorrectly?” Science has had much success in the past abstracting the commonalities of data sets, to eventually reach theories that can simplify prior complexities. Are we able to do the same thing to qualia? Can we ask the question of whether or not qualia are indeed axiomatic?

####Consciousness Antedation and Microconsciousness

It takes varying time for the signals generated from your sensory apparatus to reach your brain. Once these signals have reached their destination, it has been shown that there is a period of up to half a second before a concious claim of awareness of the signal is made. Hopefully this is where you question these findings and ask, "Wouldn't my experience have a constant feeling of lag if this were the case?" Anybody who has seen a movie with the sound lagging by half a second would most definitely agree that this small amount of time is noticable. Unintuitively however, experiments have shown that while the claim of conscious awareness lags by small periods of time, the time reported by the subject of when they were conscious of the event is antedated by the lag period. The picture below should describe the phenomenon more clearly.

![conscious-antedation](https://s3.amazonaws.com/compressionaddict/conscious-antedation.png)
<em><small>- consciousness antedation</small></em>

This seems to raise an interesting paradox with regards to the qualia position. To put simply, if you claim you feel pain before your brain is able to process the sensory data from the environment, then *when* do qualia emerge? This adds an interesting opportunity in the problem, as it shows that if qualia are indeed real, then they also have a temporal component which can be examined. What this means is that subjective conscious perception is no longer dependent on the objective time of associated neural processing. For example, if a pattern of neural activity was said to correlate with pain perception, the time at which you claim you felt the pain would have no temporal correlation with the examined activity. Furthermore, and often overlooked, this temporal fracturing supports a basis for explaining how the brain could account for the binding problem (how the unity of conscious perception is brought about by the distributed activities of the central nervous system). More specifically, it removes the binding problem altogether, because it throws into question what is in fact bound, or more importantly, that integration does not need temporal synchronisation (that the brain could, for lack of a better word ‘sew’ our stream of consciousness together over large time periods).

####Conscious Resolution and Data Types

One area of conscious perception commonly overlooked is that of conscious resolution. By that I mean the resolution of the experience itself, in the same light as I would be talking about the resolution of a digital cameras sensor. This should be obvious when you consider that you cannot *zoom* your vision to see more detail than your retina will allow. This fact shows that there is a one to one relationship between the bodies sensory resolution capabilities and the resolution of subjective experience. This works not only in regards to the spatial domain, but also in the temporal domain, as there is even a resolution limit at which you can distinguish between shades of colour, or frequency of sound. This raises a very important challenge to qualia. If all the information about the environment is already encoded by the senses, then what information could qualia add, and where would that information come from (see [Mary’s Room])? One more interesting thing to note about this area, is the way in which the senses actually encode data. Every sensory organ converts information to or from [neural spike trains]. This means, that aside from differences in the spatio-temporal patterns of the data being provided, each bit of sensory information sent to the brain is in the same format.

[Mary’s Room]: http://en.wikipedia.org/wiki/Mary's_room
[neural spike trains]: http://en.wikipedia.org/wiki/Neural_coding

####The Problem of Intuition

One of the major roadblocks to qualia is that you are unable to prove to me that you experience at all, let alone that your experience is built from a set of experiential elements. This can be shown by simplifying the human system and creating a mechanical input/output equivalent for comparison. If a chat bot said that it was experiencing pain, would you believe it? We wouldn’t rationally attribute this subjective “extra” to our mechanical counterpart, so why do we seem so insistent on allowing this inclusion for humans? The primary reason for this allowance, is that we consider our physiological similarites and extend our ***belief*** of our own subjective experience to others. This unfortunately roots this entire discussion in an argument from intuition. So can you trust your intuition? Can you use it as evidence? If human scientific history is anything to go by, this would be a bad idea. Flat Earth, [Geocentrism], [Aether], [Vitalism], etc. are just a few of the ideas that I am sure were intuitively sound at one time, but have since been proven incorrect. I believe the basis for clutching to the idea of attributing a *special* process, [epiphenomenon], or substance to consciousness comes from an evolved sense of self importance. It could be logically speculated as to how self importance would prove to be an evolutionary advantage to the human species, and could also play a role in why consciousness evolved at all.

[Geocentrism]: http://en.wikipedia.org/wiki/Geocentric_model
[Aether]: http://en.wikipedia.org/wiki/Aether_theories
[Vitalism]: http://en.wikipedia.org/wiki/Vitalism
[epiphenomenon]: http://en.wikipedia.org/wiki/Epiphenomenon

####*Proposed Solution*

####The Splitting Mistake

So then, is there another way we can approach the hard problem whilst avoiding the issues above? What if we examine the basis for the intuition of qualia itself, and how a change in perspective may rectify some conflicts. Below is an image of what I imagine the common understanding of qualia to be built from.

![splitting problem](https://s3.amazonaws.com/compressionaddict/splitting_problem.jpg)

Humans tend to split the concept of self, and the concept of the *stuff* of experience into two separate entities. It is understandable why this train of intuition arises when you consider that the situation appears to be a one-to-many (one self, experiencing many components of experience). The issue here, is that this view presupposes the existence of qualia to begin with. Below I hope to explain a way of simplifying this perspective.

In the separation picture, it is shown that while the world of experience itself seems to contain reds, blues, smells, sounds, emotions, etc., there is only a seemingly single self. This self is the focal point of association between all the experiential data, learned concepts, memories, etc., but is there any weight to the idea? Are there any properties of the self that you can define without calling upon these associations? In other words, what is the self other than the conglomerate of learned sensory associations and concepts? Is the self really necessary in this picture? I propose that rather than looking at experience as a play between the experiencer and a set of experiential elements, we instead label the conscious self as a set of associated beliefs. To elaborate on the idea, you need to examine the following question.

> What is the difference between someone who believes they are experiencing red, and someone who actually is (if qualia existed)?

From an outside perspective, it would be impossible to tell. So what happens if we treat all qualia as belief states instead? We firstly solve the complexity issue, as we have abstracted all qualia into a single definable thing. We solve the conscious antedation issues as a belief state need not be correlated to any specific point in time. Also, the one to one relationship between sensory apparatus and the resolution of experience now makes complete sense.

To summarise, if we remove the self from the picture above, and treat each belief as an associate of other beliefs and concepts, then we simply need to define the belief states and associations themselves. This makes the tapestry of experience a matrix of beliefs, rather than a matrix of undefinable qualia.

####Computational Implementation of Experience

Treating qualia as belief states, circumvents the need to define redness in software. If we come back to our original problem of how we implement experience, now we simply need to implement a belief. So how would one define a belief? A belief is just a state that some thing is in at any point in time, no different to the states defined for every day software. So if we pick say *redness*, we now only have to put our software into a state of belief that it is experiencing red. To reiterate, instead of trying to define both redness qualia, and the self experiencing this redness, let's create a software state that represents both these ideas boxes together as a belief (experiencing-redness singular). As software is simply the relationships between states, this state of experiencing redness acts as a relationship between anything else we desire in our program. I will use a crude c# example to illustrate this process simplified.

```C#
using System;

namespace Qualia
{
    class Program
    {
        private static bool experiencing_red = false;

        // alters the subjective state when a key is pressed
        static bool ProcessKey(ConsoleKey _key)
        {
            if (_key == ConsoleKey.Escape) { return false; }

            if (_key == ConsoleKey.R) {
                experiencing_red = !experiencing_red;
            }

            return true;
        }

        static void Main(string[] args)
        {
            // loop until escape is pressed (alive/dead)
            do {
                while (!Console.KeyAvailable) {
                    // at each instant in time react based on the subjective state
                    if (experiencing_red) {
                        // do any work/behaviour here when experiencing red
                        Console.Write("I believe I am experiencing red");
                    } else {
                        // do any work/behaviour here when not experience red
                        Console.Write("I believe I am not experiencing red");
                    }
                    Console.SetCursorPosition(0, 0);
                }
            } while (ProcessKey(Console.ReadKey(true).Key));
        }
    }
}
```

Now this program works on a single binary state variable representing experiencing one quale. When you press ‘R’ you toggle the software between two subjective states, which in our case we have labelled experiencing redness and not experiencing redness, although these labels are arbitrary. In the case of a human being, we have an enormously complicated architecture that could potentially represent a practically infinite set of possible experiential states which are also associated with countless other potential states and behaviours. “But all you have done is manipulated a number/memory/etc, where is the redness?” While it may be unintuitive, my response as discussed above, is simply that there is no redness. Can you not also directly manipulate neural states to achieve changes in conscious belief?

To bring back the question asked above about distinguishing between the person who believes they are experiencing x, versus the person actually experiencing x, the rational person should adopt Occam's Razor. The elegance of this position lies in the fact that beliefs can be easily represented in software (or in the case of the brain, neural states). This is because a belief is simply a relationship between data and other beliefs (ie. in the code example above, experiencing-redness is a belief state represented by a [boolean], which is associated with text output behaviours).

[boolean]: http://en.wikipedia.org/wiki/Boolean

####The Brain and Experience

I am not going to try and give an explanation of how the brain works (many more posts to come), as this is a massive topic outside the scope of this article. I do however, want to add some insights into a problematic area of research that falls within the popular consciousness and neuroscience topics. I want to make the point that I believe looking for a supposed [neural correlate of consciousness] is a red herring. Firstly because almost every part of the brain has been associated in one way or another to consciousness in some regard. Also that almost all parts of the brain can be removed individually without destroying consciousness entirely. Secondly I find this hunt to be akin to a hypothetical hunt for say, the cpu correlate of Windows, which you can hopefully infer some underlying problems. My point is that studying computational compartments of the brain makes some sense due to the parallel nature of the architecture (ie. proximal neurons will likely contribute to a larger common function at any given time). However consciousness envelopes the entire brain, and depends completely on the context of discussion.

[neural correlate of consciousness]: http://en.wikipedia.org/wiki/Neural_correlates_of_consciousness

So how does this relate back to qualia and the hard problem? Conscious antedation has shown that the time of neural processing is not dependent on the time of believed conscious experience and vice versa. I have also proposed that conscious experience is built from associations between belief states, which means it is also not dependent on the spatial location of neural processes. To understand this, imagine that a video game world could be loaded onto a contiguous chunk of memory, or sparsely represented by many remote locations whilst achieving functional equivalency.

####Conclusion

It is my belief that consciousness is not special; Not an extra substance, force, or epiphenomenon, but rather a process of computation no different to that running on the machine you are reading this on. To be more philosophically precise, I believe human beings are [p-zombies]. That at the heart of this discussion lies a mistaken intuition, coupled with a misplaced evolutionary desire for self importance. This article is by no means a proof, however I wish to emphasise that the onus now is completely on the qualia proponents to prove qualia exist, no matter how strong or globally shared this intuition is. Any rational person should know that it is impossible to conclusively prove a negative. 

I don’t feel this issue will be put to rest until we are able to have intelligent conversations with learning machines, built upon the computational principles of the human brain. Even then, I feel as though the debates will be abundant. I am sure that if that day comes you will really need to provide evidence other than an intuitive plea. If you disagree with this article, I urge you to put together an argument that shows how an intelligent android, built with an associative subjective matrix like the one described above differs to you. I urge you to at least muster the courage to question your foundational intuitions. As for the implications of this information, I leave that up to you.

[p-zombies]: http://en.wikipedia.org/wiki/Philosophical_zombie			