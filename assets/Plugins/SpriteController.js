#pragma strict

public var Player1 : UnityEngine.Sprite;
public var Player2 : UnityEngine.Sprite;
public var Player3 : UnityEngine.Sprite;
public var Player4 : UnityEngine.Sprite;

function Start ()
{
	var sprites : GameObject[];
	sprites = GameObject.FindGameObjectsWithTag("Sprite");
	var spriteRenderer = GetComponent.<SpriteRenderer>();
	if(transform.root.gameObject.name == "Player1")
		spriteRenderer.sprite = Player1;
	if(transform.root.gameObject.name == "Player2")
		spriteRenderer.sprite = Player2;
	if(transform.root.gameObject.name == "Player3")
		spriteRenderer.sprite = Player3;
	if(transform.root.gameObject.name == "Player4")
		spriteRenderer.sprite = Player4;
}

function Update ()
{
	transform.rotation = Quaternion.identity;
}