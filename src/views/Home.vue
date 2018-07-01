This page has a lot of hardcoded style. Mostly just due to it being a one off and for faster development. If/when we build more front facing marketing pages we'll build up some more global css.

<template>
	<main :class="$style.main" class="text-xl">
		<section :class="[$style.section, $style.square]" class="bg-grey-darkest">
			<div class="absolute pin flex flex-col items-center justify-center p-8 text-center">
				<logo-mark :class="$style.logo" />
				<h1 :class="$style.title">The Watcher</h1>
				<h2 :class="$style.subtitle" class="text-grey">A web-based tracker app for Kingdom Death</h2>
			</div>
		</section>
		<section :class="$style.section" class="flex flex-col justify-center items-start bg-grey-darkest">
			<p class="text-5xl font-bold">Built for the community, <br>by the community.</p>
			<core-button class="my-4" href="https://discordapp.com/invite/jBPFyBG">Join us on Discord</core-button>
			<small class="text-sm text-grey">or <a href="http://eepurl.com/cv6PRv" class="text-grey hover:text-yellow">sign-up</a> for our mailing list</small>
		</section>
		<section :class="[$style.section, $style['bg-offwhite']]" class="text-black">
			<h2 :class="[$style.title, $style.withBorder]" class="font-extrabold">Where <br>We&rsquo;re At</h2>
			<p class="leading-loose">The Watcher is an extremely ambitious project to help streamline and simplify one of the most rewarding and in-depth tabletop games available on the market. Our intention is to bring players together by creating the say-all-end-all of tracker applications.</p>
		</section>
		<section :class="[$style.section, $style['bg-offwhite']]" class="text-black pl-4">
			<div class="flex items-center">
				<div class="w-1/3 text-center pr-8 mr-8 flex-no-shrink">
					<img src="@/assets/marketing/people.svg" alt="">
				</div>
				<div>
					<h3 class="mb-2">Survivor Management</h3>
					<p>Care for your survivors, one at a time.</p>
				</div>
			</div>
			<div class="flex items-center my-8">
				<div class="w-1/3 text-center pr-8 mr-8 flex-no-shrink">
					<img src="@/assets/marketing/simple.svg" alt="">
				</div>
				<div>
					<h3 class="mb-2">Ease and Simplicity</h3>
					<p>The Watcher offers a well-thought-out UX by allowing users to quickly view and manipulate mutltiple points of information without interrupting the flow and rythym of your play session.</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="w-1/3 text-center pr-8 mr-8 flex-no-shrink">
					<img src="@/assets/marketing/sync.svg" alt="">
				</div>
				<div>
					<h3 class="mb-2">Syncing Across All Devices</h3>
					<p>Syncing across all web-based devices and operating systems a non-issue. Whether your running a solo campaign or have a table full of friends, managing and participating in a campaign administration is a breeze.</p>
				</div>
			</div>
		</section>
		<section :class="[$style.section]" class="bg-yellow text-black">
			<h2 :class="[$style.title, $style.withBorderWhite]" class="font-extrabold">Intuitive Design</h2>
			<p class="leading-loose">Built from the ground up, The Watcher&rsquo;s focus is on a simple and streamlined experience allowing players to focus more on the game and less about where to put all of those character sheets and eraser shavings.</p>
		</section>
		<section :class="$style.bgImage" />
		<section :class="[$style.section]" class="bg-grey-dark">
			<h2 :class="[$style.title, $style.withBorder]" class="font-extrabold text-black">Looking <br>Ahead</h2>
			<p class="leading-loose">We&rsquo;ve come a long way and but have a long way to go. We&rsquo;re always on the lookout for passionate and talented members of the community looking to help create the best tracker app available. Feel free to ask any questions or join us on our <a href="https://discordapp.com/invite/jBPFyBG" class="text-yellow ">Discord channel</a>.</p>
		</section>
		<section :class="[$style.section]" class="bg-grey-dark">
			<div class="flex items-center">
				<div class="w-1/3 text-center pr-8 mr-8 flex-no-shrink">
					<img src="@/assets/marketing/community.svg" alt="">
				</div>
				<div>
					<h3 class="mb-2 text-grey">Community Driven</h3>
					<p>The Watcher is now 100% built by the community, for the community. Our code is open source and we&rsquo;re around to discuss any aspect of the app in our Discord channel.</p>
				</div>
			</div>
			<div class="flex items-center my-8">
				<div class="w-1/3 text-center pr-8 mr-8 flex-no-shrink">
					<img src="@/assets/marketing/vuebase.svg" alt="">
				</div>
				<div>
					<h3 class="mb-2 text-grey">The Need For Speed</h3>
					<p>The Watcher is being completely rewritten using Google Firebase and VueJs to deliver the fastest user experience possible.</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="w-1/3 text-center pr-8 mr-8 flex-no-shrink">
					<img src="@/assets/marketing/next.svg" alt="">
				</div>
				<div>
					<h3 class="mb-2 text-grey">Next Steps</h3>
					<p>That&rsquo;s really up to our users, testers, and volunteers. We&rsquo;re excited to see where this next phase of The Watcher takes the tool as well as the community</p>
				</div>
			</div>
		</section>
		<section :class="[$style.section, $style.footer]" class="bg-grey-darkest">
			<h4 class="text-4xl mb-2">The Watcher</h4>
			<a href="https://discordapp.com/invite/jBPFyBG" class="mr-4"><img src="@/assets/marketing/discord.svg" alt="Join us on Discord"></a>
			<a href="https://github.com/Playing-Indoors/The-Watcher"><img src="@/assets/marketing/github.svg" alt="Contribute on GitHub"></a>
		</section>
		<section :class="[$style.section, $style.footer]" class="bg-grey-darkest flex flex-col items-end">
			<core-button class="my-4" href="https://discordapp.com/invite/jBPFyBG">Join us on Discord</core-button>
			<small class="text-xs text-grey">&copy; 2018, Timothy O‘Connell, Logan Ogden, Caleb Kester, and Khoa Ngo</small>
		</section>
	</main>
</template>

<script>
import LogoMark from '@/assets/logo-mark';
import CoreButton from '@/components/CoreButton/CoreButton';

export default {
	components: {
		CoreButton,
		LogoMark
	}
};
</script>

<style lang="scss" module>
@function strip-unit($value) {
	@return $value / ($value * 0 + 1);
}

@mixin fluid-type($min-vw, $max-vw, $min-font-size, $max-font-size) {
	$u1: unit($min-vw);
	$u2: unit($max-vw);
	$u3: unit($min-font-size);
	$u4: unit($max-font-size);

	@if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {
		& {
			// font-size: $min-font-size;
			@media screen and (min-width: $min-vw) {
				font-size: calc(
					#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} *
						((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})
				);
			}

			@media screen and (min-width: $max-vw) {
				font-size: $max-font-size;
			}
		}
	}
}

// 	@include fluid-type($min_width, $max_width, $min_font, $max_font);
.main {
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}
}

.square {
	padding: 0;
	position: relative;
	max-height: 95vh;
	min-height: 300px;

	&::before {
		content: '';
		height: 0;
		display: block;
		padding-top: 100%;
		width: 1px;
		position: relative;
	}
}

.section {
	padding: 15% 10%;
}

.footer {
	padding-top: 10%;
	padding-bottom: 10%;
}

.bg-offwhite {
	background: #eeeeee;
}

.bgImage {
	background: url(@/assets/marketing/devices.png) no-repeat 50% 50%;
	background-size: cover;
	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		background-image: url(@/assets/marketing/devices@2x.png);
	}
}

.logo {
	color: config('colors.white');
	width: 36%;
	margin-bottom: 5%;
}

.title {
	font-size: 42px;
	@include fluid-type(320px, 800px, 42px, 81px);
	@include fluid-type(800px, 1600px, 42px, 81px);
}

.withBorder::after,
.withBorderWhite::after {
	content: '';
	display: block;
	margin: 5% 0 8%;
	width: 20vw;
	height: 8px;
	@media (min-width: 800px) {
		width: 10vw;
	}
	background: config('colors.yellow');
}

.withBorderWhite::after {
	background: config('colors.white');
}

.subtitle {
	font-size: 10px;
	@include fluid-type(320px, 800px, 10px, 21px);
	@include fluid-type(800px, 1600px, 10px, 21px);
}
</style>
