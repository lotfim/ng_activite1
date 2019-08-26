import {Subject} from 'rxjs';

export class PostService{
    
    emitPostSubject(){
        this.postSubject.next(this.posts.slice());
    }

    postSubject = new Subject<any[]>();
    
    private posts = [
        {
            id: 0,
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        },
        {
            id: 1,
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        },
        {
            id: 2,
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        }
      ];

    likePost(index: number){
        this.posts[index].loveIts++;
    }  

    dislikePost(index: number){
        this.posts[index].loveIts--;
    }

    deletePost(index: number){
        this.posts.splice(index, 1);
        this.emitPostSubject();
    }

    addPost(title: string, content: string){
        const post = {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        }
        post.title = title;
        post.content = content;
        this.posts.unshift(post);
        this.emitPostSubject();

    }
}