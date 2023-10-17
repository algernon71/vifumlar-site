import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
export interface RSSResponse {
	episodes: RSSEpisode[];
}

export interface RSSEpisode {
	id: number;

	podcast_id: number;
	title: string;
	subtitle: string | null;
	description: string;
	itunes_duration: number;
	author_email: string | null;
	author_name: string | null | null;
	itunes_explicit: string;
	itunes_episode: number | null;
	itunes_season: number | null;
	itunes_episode_type: String;
	pub_date: String;
	draft: number;
	scheduled: number;
	schedule_datetime: string | null;
	guid: string;
	custom_link: string | null;
	apple_hosted_audio_is_subscriber_only: number | null;
	apple_episode_access_type: string | null;
	apple_episode_id: number | null;
	apple_hosted_audio_subscriber_only_start_date: string | null;
	location_name: string | null;
	location_coordinates: string | null;
	timestamp_created: string;
	timestamp_updated: string;
	timestamp_deleted: string | null;
	episode_cover: string | null;
	episode_asset: string;
	episode_keywords: any[];
}
@Injectable({
	providedIn: 'root'
})
export class EpisodeService {
	rssUrl = "https://apollo.rss.com/podcasts/fummelsondqg/episodes";
	 constructor(private http: HttpClient) { }
	 
	getEpisodes(): Observable<RSSEpisode[]> {
		return of(this.rssResponse0.episodes.concat(this.rssResponse1.episodes).concat(this.rssResponse2.episodes));
	}
	
	getEpisodesNew(): Observable<RSSEpisode[]> {
		 return this.http.get<RSSResponse>(this.rssUrl + '?limit=9&page=0').pipe(map(response => response.episodes ));
	}
	rssResponse0: RSSResponse = {"episodes":[{"id":1154850,"podcast_id":223974,"title":"Introduktion","subtitle":null,"description":"<p>Kort introduktion till denna pod innan äventyret börjar</p>","itunes_duration":396,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":null,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-04T17:34:47.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"d51e5dbe-7b57-4296-8cd6-38dfd9730639","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-04T17:18:10.000Z","timestamp_updated":"2023-10-06T12:27:50.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_12_27_57_c63dbed5-2173-44b8-a9e1-749998a9d7bd.mp3","episode_keywords":[]},{"id":1154853,"podcast_id":223974,"title":"Äventyret börjar!","subtitle":null,"description":"<p>Aväntyret börjar med att Varkmin och Vasker möter Blaxtur i Isakra på Trinsmyra</p>","itunes_duration":3809,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":1,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-04T17:37:49.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"53de7053-18ad-46f1-bc8e-4f7668d2589e","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-04T17:19:48.000Z","timestamp_updated":"2023-10-10T14:44:49.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_10_14_44_48_7926f10e-dfbb-435d-986d-2022ec26790b.mp3","episode_keywords":[]},{"id":1157886,"podcast_id":223974,"title":"Ödessaga","subtitle":null,"description":"<p>Hela spelagruppen möts upp i Isakra</p>","itunes_duration":3977,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":2,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T15:24:26.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"54746cd6-b56e-4b2b-b634-3b48203505f4","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T14:56:20.000Z","timestamp_updated":"2023-10-17T22:27:05.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_14_58_03_a3764d68-9104-46ea-8d5f-416d061b489d.mp3","episode_keywords":[]},{"id":1157924,"podcast_id":223974,"title":"Avfärd mot Marjura","subtitle":null,"description":"<p>Spelgruppen avseglari sitt nya skepp Ödessaga tillsammans med Svavelkonvojen mot den fjärran nordliga ön Marjura</p>","itunes_duration":3864,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":3,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T15:28:24.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"cdae60b0-4b1a-4047-ab2b-c9f4b8c28755","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T15:24:22.000Z","timestamp_updated":"2023-10-17T22:27:15.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_15_25_14_8782407a-5af4-4bc2-b45e-19ae4d374242.mp3","episode_keywords":[]},{"id":1157936,"podcast_id":223974,"title":"Ankomst till Marjura","subtitle":null,"description":"<p>Efter en lång resa siktar spelgruppen äntligen Marjura</p>","itunes_duration":3568,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":4,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T15:31:52.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"bc839fcb-94a7-49aa-b043-5ace72f6dc06","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T15:30:15.000Z","timestamp_updated":"2023-10-17T22:27:28.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_15_30_58_8c308893-2c01-4e8f-922a-c2302d0b1c9d.mp3","episode_keywords":[]},{"id":1158015,"podcast_id":223974,"title":" En kväll på Junker Hildurs","subtitle":null,"description":"<p>Väl ankomna till Arhem på Marjura så beger sig sällskapet till det lokala värdshuset Junker Hildurs</p>","itunes_duration":5430,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":5,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T16:16:04.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"b1b0586a-ae21-4163-b395-eb1599358eb4","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T16:09:09.000Z","timestamp_updated":"2023-10-17T22:27:43.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_16_10_49_0be48e98-0e97-41c7-bdc9-b3727a95522a.mp3","episode_keywords":[]},{"id":1158047,"podcast_id":223974,"title":"En sen kväll i Arhem","subtitle":null,"description":"<p>Efter att ha ätit sig mätta på Junker Hildurs så beger sig gruppen ut i Arhem på kvällen och stöter på Isdruiden Perrima</p>","itunes_duration":4597,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":6,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T16:34:48.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"980209f8-4ee4-4403-844a-5d122f418780","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T16:25:37.000Z","timestamp_updated":"2023-10-17T22:27:54.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_16_26_35_65355518-7711-443c-ba3c-845841df7977.mp3","episode_keywords":[]},{"id":1158067,"podcast_id":223974,"title":"Arhem","subtitle":null,"description":"<p>Sällskapet bekantar sig med Arhem och ett antal intressanta personer och platser.</p><p>De få ett intressant och kanske lönsamt uppdrag av ett par dvärgar i staden.</p>","itunes_duration":3835,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":7,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T16:40:47.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"70ba0ee4-bbb8-4aaf-b449-927a8eb73a4d","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T16:37:43.000Z","timestamp_updated":"2023-10-17T22:28:03.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_16_38_39_fd85978b-430c-4cc3-b8b6-4a2f3c515f48.mp3","episode_keywords":[]},{"id":1158264,"podcast_id":223974,"title":"Arhem","subtitle":null,"description":"<p>Sällskapet handlar och förkovrar sig mer i Arhem, förbereder för en expedition till Silvergruvan på uppdrag av dvärgarna och lär känna intressant person i Malek Mangus</p>","itunes_duration":3708,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":8,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T20:06:24.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"87b36c0c-ae90-4f97-95df-396f64e67f02","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T20:03:15.000Z","timestamp_updated":"2023-10-17T22:28:14.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_20_04_17_63c888e6-89ba-443b-8388-790d8352d091.mp3","episode_keywords":[]},{"id":1158283,"podcast_id":223974,"title":"Åter på Junker Hildurs","subtitle":null,"description":"<p>Sällskapet hamnar återigen på Junker Hildurs för en trevlig kväll och knyter nya kontakter och förbereder sig inför expeditionen till Kvicksilvergruvan nästa dag</p>","itunes_duration":4809,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":9,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T20:41:54.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"63fb0acc-54e8-42d8-b6f4-46b0b30392ce","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T20:18:50.000Z","timestamp_updated":"2023-10-17T22:28:23.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_20_19_44_4b383e8b-acff-461c-a40f-5c4b63792e92.mp3","episode_keywords":[]}]}
	rssResponse1: RSSResponse = {"episodes":[{"id":1154850,"podcast_id":223974,"title":"Introduktion","subtitle":null,"description":"<p>Kort introduktion till denna pod innan äventyret börjar</p>","itunes_duration":396,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":null,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-04T17:34:47.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"d51e5dbe-7b57-4296-8cd6-38dfd9730639","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-04T17:18:10.000Z","timestamp_updated":"2023-10-06T12:27:50.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_12_27_57_c63dbed5-2173-44b8-a9e1-749998a9d7bd.mp3","episode_keywords":[]},{"id":1154853,"podcast_id":223974,"title":"Äventyret börjar!","subtitle":null,"description":"<p>Aväntyret börjar med att Varkmin och Vasker möter Blaxtur i Isakra på Trinsmyra</p>","itunes_duration":3809,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":1,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-04T17:37:49.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"53de7053-18ad-46f1-bc8e-4f7668d2589e","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-04T17:19:48.000Z","timestamp_updated":"2023-10-10T14:44:49.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_10_14_44_48_7926f10e-dfbb-435d-986d-2022ec26790b.mp3","episode_keywords":[]},{"id":1157886,"podcast_id":223974,"title":"Ödessaga","subtitle":null,"description":"<p>Hela spelagruppen möts upp i Isakra</p>","itunes_duration":3977,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":2,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T15:24:26.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"54746cd6-b56e-4b2b-b634-3b48203505f4","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T14:56:20.000Z","timestamp_updated":"2023-10-17T22:27:05.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_14_58_03_a3764d68-9104-46ea-8d5f-416d061b489d.mp3","episode_keywords":[]},{"id":1157924,"podcast_id":223974,"title":"Avfärd mot Marjura","subtitle":null,"description":"<p>Spelgruppen avseglari sitt nya skepp Ödessaga tillsammans med Svavelkonvojen mot den fjärran nordliga ön Marjura</p>","itunes_duration":3864,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":3,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T15:28:24.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"cdae60b0-4b1a-4047-ab2b-c9f4b8c28755","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T15:24:22.000Z","timestamp_updated":"2023-10-17T22:27:15.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_15_25_14_8782407a-5af4-4bc2-b45e-19ae4d374242.mp3","episode_keywords":[]},{"id":1157936,"podcast_id":223974,"title":"Ankomst till Marjura","subtitle":null,"description":"<p>Efter en lång resa siktar spelgruppen äntligen Marjura</p>","itunes_duration":3568,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":4,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T15:31:52.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"bc839fcb-94a7-49aa-b043-5ace72f6dc06","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T15:30:15.000Z","timestamp_updated":"2023-10-17T22:27:28.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_15_30_58_8c308893-2c01-4e8f-922a-c2302d0b1c9d.mp3","episode_keywords":[]},{"id":1158015,"podcast_id":223974,"title":" En kväll på Junker Hildurs","subtitle":null,"description":"<p>Väl ankomna till Arhem på Marjura så beger sig sällskapet till det lokala värdshuset Junker Hildurs</p>","itunes_duration":5430,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":5,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T16:16:04.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"b1b0586a-ae21-4163-b395-eb1599358eb4","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T16:09:09.000Z","timestamp_updated":"2023-10-17T22:27:43.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_16_10_49_0be48e98-0e97-41c7-bdc9-b3727a95522a.mp3","episode_keywords":[]},{"id":1158047,"podcast_id":223974,"title":"En sen kväll i Arhem","subtitle":null,"description":"<p>Efter att ha ätit sig mätta på Junker Hildurs så beger sig gruppen ut i Arhem på kvällen och stöter på Isdruiden Perrima</p>","itunes_duration":4597,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":6,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T16:34:48.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"980209f8-4ee4-4403-844a-5d122f418780","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T16:25:37.000Z","timestamp_updated":"2023-10-17T22:27:54.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_16_26_35_65355518-7711-443c-ba3c-845841df7977.mp3","episode_keywords":[]},{"id":1158067,"podcast_id":223974,"title":"Arhem","subtitle":null,"description":"<p>Sällskapet bekantar sig med Arhem och ett antal intressanta personer och platser.</p><p>De få ett intressant och kanske lönsamt uppdrag av ett par dvärgar i staden.</p>","itunes_duration":3835,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":7,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T16:40:47.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"70ba0ee4-bbb8-4aaf-b449-927a8eb73a4d","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T16:37:43.000Z","timestamp_updated":"2023-10-17T22:28:03.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_16_38_39_fd85978b-430c-4cc3-b8b6-4a2f3c515f48.mp3","episode_keywords":[]},{"id":1158264,"podcast_id":223974,"title":"Arhem","subtitle":null,"description":"<p>Sällskapet handlar och förkovrar sig mer i Arhem, förbereder för en expedition till Silvergruvan på uppdrag av dvärgarna och lär känna intressant person i Malek Mangus</p>","itunes_duration":3708,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":8,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T20:06:24.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"87b36c0c-ae90-4f97-95df-396f64e67f02","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T20:03:15.000Z","timestamp_updated":"2023-10-17T22:28:14.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_20_04_17_63c888e6-89ba-443b-8388-790d8352d091.mp3","episode_keywords":[]},{"id":1158283,"podcast_id":223974,"title":"Åter på Junker Hildurs","subtitle":null,"description":"<p>Sällskapet hamnar återigen på Junker Hildurs för en trevlig kväll och knyter nya kontakter och förbereder sig inför expeditionen till Kvicksilvergruvan nästa dag</p>","itunes_duration":4809,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":9,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T20:41:54.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"63fb0acc-54e8-42d8-b6f4-46b0b30392ce","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T20:18:50.000Z","timestamp_updated":"2023-10-17T22:28:23.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_20_19_44_4b383e8b-acff-461c-a40f-5c4b63792e92.mp3","episode_keywords":[]}]}
	rssResponse2: RSSResponse = {"episodes":[{"id":1158306,"podcast_id":223974,"title":"Avfärd mot Kvicksilvergruvan","subtitle":null,"description":"<p>Sällskapet ger sig av på expeditionen till Kvicksilvergruvan</p>","itunes_duration":3619,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":10,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T20:48:49.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"6e7c2d5e-fe2e-4798-9691-406230fd5110","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T20:43:18.000Z","timestamp_updated":"2023-10-17T22:28:33.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_20_44_00_784f307a-02ca-4c4f-b58d-d8fbf7db3b1d.mp3","episode_keywords":[]},{"id":1158314,"podcast_id":223974,"title":"Kvicksilvergruvan","subtitle":null,"description":"<p>Sällskapet kommer fram till Kvicksilvergruvan och försöker hitta vägen in</p>","itunes_duration":3733,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":11,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T20:50:35.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"43834f3f-0a19-4779-be28-0e2a88895f9c","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T20:49:44.000Z","timestamp_updated":"2023-10-17T22:28:48.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_20_50_31_522c0fa0-b54e-4b93-9f96-772d70cfd954.mp3","episode_keywords":[]},{"id":1158354,"podcast_id":223974,"title":"In i kvicksilvergruvan!","subtitle":null,"description":"<p>Gruppen hittar till slut en hemlig ingång som de lyckas ta sig in igenom</p>","itunes_duration":2733,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":12,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T21:48:22.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"62b8d6b4-e7b5-4d60-a429-2f07d333e364","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T21:37:55.000Z","timestamp_updated":"2023-10-17T22:28:59.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_21_38_25_aa298aa1-514e-4728-9372-2945f3507f25.mp3","episode_keywords":[]},{"id":1158362,"podcast_id":223974,"title":"Faror i gruvan","subtitle":null,"description":"<p>Längre in i kvicksilvergruvan stöter gruppen på flera faror</p>","itunes_duration":4294,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":13,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T21:54:35.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"1639d091-e5a6-48f3-ac26-7d779618b090","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T21:51:54.000Z","timestamp_updated":"2023-10-17T22:29:08.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_21_52_36_4a669b4b-ce0c-40ce-87f7-3a2226f47de1.mp3","episode_keywords":[]},{"id":1158366,"podcast_id":223974,"title":"Ett djupt schakt","subtitle":null,"description":"<p>Gruppen kastar sig i säkerhet i ett djupt vattenfyllt shackt, men hur skall de ta sig upp igen?</p>","itunes_duration":4572,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":14,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T22:02:18.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"eedc05a4-8858-4001-b1fa-870a00749678","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T21:59:01.000Z","timestamp_updated":"2023-10-17T22:29:20.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_21_59_46_f73c3703-8c90-4108-9d5f-9e291c786c54.mp3","episode_keywords":[]},{"id":1158369,"podcast_id":223974,"title":"Kvicksilver är tungt","subtitle":null,"description":"<p>Äntligen lyckas äventyrarna lokalisera tunnor med kvicksilver, men de ligger under vatten och tunnorna är tunga</p>","itunes_duration":3906,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":15,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-06T22:04:57.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"b1796d77-9dfb-4088-8898-5a5a1aa7704d","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-06T22:03:51.000Z","timestamp_updated":"2023-10-17T22:29:30.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_06_22_04_28_443edaed-c0f4-498d-a00b-da280ee31071.mp3","episode_keywords":[]},{"id":1161729,"podcast_id":223974,"title":"Att ta sig ut","subtitle":null,"description":"<p>Nu när sällskapet lyckats hämta en del Kvicksilver, hur skall de få ut det från gruvan?</p>","itunes_duration":3859,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":16,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-08T19:14:44.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"13f7aa6c-ab4d-4f49-b397-5e19f374e211","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-08T18:52:47.000Z","timestamp_updated":"2023-10-17T22:29:40.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_08_18_57_21_f53c6bee-9537-49fb-a257-55c4eb844ea6.mp3","episode_keywords":[]},{"id":1161754,"podcast_id":223974,"title":" En plan börjar formas","subtitle":null,"description":"<p>Med mycket möda och improvisation börjar gruppen till slut få med sig kvicksilver ut ur gruvan, en tunna i taget, men det känns som ett evighetsprojekt</p>","itunes_duration":4592,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":17,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-08T19:27:11.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"c38c4f1b-4991-443f-9e18-349d209f1aef","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-08T19:15:56.000Z","timestamp_updated":"2023-10-17T22:29:50.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_08_19_16_57_cdfefb0f-41e8-4955-b878-9b1caddba87b.mp3","episode_keywords":[]},{"id":1161772,"podcast_id":223974,"title":"Från ett problem till ett annat","subtitle":null,"description":"<p>Projektet med Kvicksilvertunnorna fortsätter, nu har de fått ut dem ur gruvan, men hur kan de få dem tillbaka till Arhem?</p>","itunes_duration":3771,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":18,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-08T19:31:11.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"4aa6f88f-94db-428d-87af-1b668b6ce7a1","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-08T19:29:06.000Z","timestamp_updated":"2023-10-17T22:30:04.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_08_19_30_00_5fc24dda-994f-4c44-baf8-a48a4e87c0ce.mp3","episode_keywords":[]},{"id":1161779,"podcast_id":223974,"title":"Avsnitt 19 - Det som göms i snö","subtitle":"","description":"Man kan gömma mycket i snö, tex Kvicksilvertunnor","itunes_duration":4076,"author_email":null,"author_name":null,"itunes_explicit":"no","itunes_episode":19,"itunes_season":1,"itunes_episode_type":"full","pub_date":"2023-10-08T19:36:52.000Z","draft":0,"scheduled":0,"schedule_datetime":null,"guid":"b7c0f697-3f13-4088-b5d8-c794e192d5a7","custom_link":null,"apple_hosted_audio_is_subscriber_only":0,"apple_episode_access_type":"PUBLIC","apple_episode_id":null,"apple_hosted_audio_subscriber_only_start_date":null,"location_name":null,"location_coordinates":null,"timestamp_created":"2023-10-08T19:34:13.000Z","timestamp_updated":"2023-10-08T19:36:52.000Z","timestamp_deleted":null,"episode_cover":null,"episode_asset":"2023_10_08_19_35_15_938315f0-6292-4df4-bf96-192a309d506a.mp3","episode_keywords":[]}]}
	
	episodes: RSSEpisode[] = [{
		"id": 1154850,
		"podcast_id": 223974,
		"title": "Introduktion",
		"subtitle": null,
		"description": "<p>Kort introduktion till denna pod innan äventyret börjar</p>",
		"itunes_duration": 396,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": null,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-04T17:34:47.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "d51e5dbe-7b57-4296-8cd6-38dfd9730639",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-04T17:18:10.000Z",
		"timestamp_updated": "2023-10-06T12:27:50.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_12_27_57_c63dbed5-2173-44b8-a9e1-749998a9d7bd.mp3",
		"episode_keywords": []
	},
	{
		"id": 1154853,
		"podcast_id": 223974,
		"title": "Äventyret börjar!",
		"subtitle": null,
		"description": "<p>Aväntyret börjar med att Varkmin och Vasker möter Blaxtur i Isakra på Trinsmyra</p>",
		"itunes_duration": 3809,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 1,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-04T17:37:49.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "53de7053-18ad-46f1-bc8e-4f7668d2589e",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-04T17:19:48.000Z",
		"timestamp_updated": "2023-10-10T14:44:49.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_10_14_44_48_7926f10e-dfbb-435d-986d-2022ec26790b.mp3",
		"episode_keywords": []
	},
	{
		"id": 1157886,
		"podcast_id": 223974,
		"title": "Avsnitt 2 - Ödessaga",
		"subtitle": null,
		"description": "<p>Hela spelagruppen möts upp i Isakra</p>",
		"itunes_duration": 3977,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 2,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T15:24:26.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "54746cd6-b56e-4b2b-b634-3b48203505f4",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T14:56:20.000Z",
		"timestamp_updated": "2023-10-06T15:24:26.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_14_58_03_a3764d68-9104-46ea-8d5f-416d061b489d.mp3",
		"episode_keywords": []
	},
	{
		"id": 1157924,
		"podcast_id": 223974,
		"title": "Avsnitt 3 - Avfärd mot Marjura",
		"subtitle": "",
		"description": "Spelgruppen avseglari sitt nya skepp Ödessaga tillsammans med Svavelkonvojen  mot den fjärran nordliga ön Marjura ",
		"itunes_duration": 3864,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 3,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T15:28:24.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "cdae60b0-4b1a-4047-ab2b-c9f4b8c28755",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T15:24:22.000Z",
		"timestamp_updated": "2023-10-06T15:28:24.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_15_25_14_8782407a-5af4-4bc2-b45e-19ae4d374242.mp3",
		"episode_keywords": []
	},
	{
		"id": 1157936,
		"podcast_id": 223974,
		"title": "Avsnitt 4 - Ankomst till Marjura",
		"subtitle": "",
		"description": "Efter en lång resa siktar spelgruppen äntligen Marjura",
		"itunes_duration": 3568,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 4,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T15:31:52.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "bc839fcb-94a7-49aa-b043-5ace72f6dc06",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T15:30:15.000Z",
		"timestamp_updated": "2023-10-06T15:31:52.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_15_30_58_8c308893-2c01-4e8f-922a-c2302d0b1c9d.mp3",
		"episode_keywords": []
	},
	{
		"id": 1158015,
		"podcast_id": 223974,
		"title": "Avsnitt 5 - En kväll på Junker Hildurs",
		"subtitle": null,
		"description": "<p>Väl ankomna till Arhem på Marjura så beger sig sällskapet till det lokala värdshuset Junker Hildurs</p>",
		"itunes_duration": 5430,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 5,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T16:16:04.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "b1b0586a-ae21-4163-b395-eb1599358eb4",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T16:09:09.000Z",
		"timestamp_updated": "2023-10-06T16:20:46.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_16_10_49_0be48e98-0e97-41c7-bdc9-b3727a95522a.mp3",
		"episode_keywords": []
	},
	{
		"id": 1158047,
		"podcast_id": 223974,
		"title": "Avsnitt 6 - En sen kväll i Arhem",
		"subtitle": "",
		"description": "Efter att ha ätit sig mätta på Junker Hildurs så beger sig gruppen ut i Arhem på kvällen och stöter på Isdruiden Perrima",
		"itunes_duration": 4597,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 6,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T16:34:48.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "980209f8-4ee4-4403-844a-5d122f418780",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T16:25:37.000Z",
		"timestamp_updated": "2023-10-06T16:34:48.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_16_26_35_65355518-7711-443c-ba3c-845841df7977.mp3",
		"episode_keywords": []
	},
	{
		"id": 1158067,
		"podcast_id": 223974,
		"title": "Avsnitt 7 - Arhem",
		"subtitle": null,
		"description": "<p>Sällskapet bekantar sig med Arhem och ett antal intressanta personer och platser.</p><p>De få ett intressant och kanske lönsamt uppdrag av ett par dvärgar i staden.</p>",
		"itunes_duration": 3835,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 7,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T16:40:47.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "70ba0ee4-bbb8-4aaf-b449-927a8eb73a4d",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T16:37:43.000Z",
		"timestamp_updated": "2023-10-06T20:06:20.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_16_38_39_fd85978b-430c-4cc3-b8b6-4a2f3c515f48.mp3",
		"episode_keywords": []
	},
	{
		"id": 1158264,
		"podcast_id": 223974,
		"title": "Avsnitt 8 - Arhem",
		"subtitle": "",
		"description": "Sällskapet handlar och förkovrar sig mer i Arhem, förbereder för en expedition till Silvergruvan på uppdrag av dvärgarna och lär känna intressant person i Malek Mangus",
		"itunes_duration": 3708,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 8,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T20:06:24.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "87b36c0c-ae90-4f97-95df-396f64e67f02",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T20:03:15.000Z",
		"timestamp_updated": "2023-10-06T20:06:24.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_20_04_17_63c888e6-89ba-443b-8388-790d8352d091.mp3",
		"episode_keywords": []
	},
	{
		"id": 1158283,
		"podcast_id": 223974,
		"title": "Avsnitt 9 - Åter på Junker Hildurs",
		"subtitle": "",
		"description": "Sällskapet hamnar återigen på Junker Hildurs för en trevlig kväll och knyter nya kontakter och förbereder sig inför expeditionen till Kvicksilvergruvan nästa dag",
		"itunes_duration": 4809,
		"author_email": null,
		"author_name": null,
		"itunes_explicit": "no",
		"itunes_episode": 9,
		"itunes_season": 1,
		"itunes_episode_type": "full",
		"pub_date": "2023-10-06T20:41:54.000Z",
		"draft": 0,
		"scheduled": 0,
		"schedule_datetime": null,
		"guid": "63fb0acc-54e8-42d8-b6f4-46b0b30392ce",
		"custom_link": null,
		"apple_hosted_audio_is_subscriber_only": 0,
		"apple_episode_access_type": "PUBLIC",
		"apple_episode_id": null,
		"apple_hosted_audio_subscriber_only_start_date": null,
		"location_name": null,
		"location_coordinates": null,
		"timestamp_created": "2023-10-06T20:18:50.000Z",
		"timestamp_updated": "2023-10-06T20:41:54.000Z",
		"timestamp_deleted": null,
		"episode_cover": null,
		"episode_asset": "2023_10_06_20_19_44_4b383e8b-acff-461c-a40f-5c4b63792e92.mp3",
		"episode_keywords": []
	}];
}
