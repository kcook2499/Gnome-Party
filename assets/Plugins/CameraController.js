#pragma strict

public var targetObject : GameObject = null;

function Start () {

}

function Update ()
{
	
	if (targetObject != null)
	{
		transform.position.x = targetObject.transform.position.x;
		transform.position.z = targetObject.transform.position.z - 6;
	}
}